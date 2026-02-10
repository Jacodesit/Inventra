<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
// use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')
            ->where('users_id', auth()->id())
            ->latest()
            ->get();

        $categories = Category::all();

        return Inertia::render('Mainpages/products', [
            'products' => $products,
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_image' => 'nullable|file|image|mimes:jpg,jpeg,png,webp|max:10048',
            'product_name' => 'required|string|max:255',
            'product_description' => 'required|string|max:500',
            'product_quantity' => 'required|integer|min:0',
            'product_price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
        ]);

        $imagePath = null;

        if($request->hasFile('product_image')) {
            $imagePath = $request->file('product_image')->store('product','public');
            $imageUrl = Storage::url($imagePath);
        };

        Product::create([
            'product_image' => $imageUrl,
            'product_name' => $validated['product_name'],
            'product_description' => $validated['product_description'],
            'product_quantity' => $validated['product_quantity'],
            'product_price' => $validated['product_price'],
            'category_id' => $validated['category_id'],
            'users_id' => auth()->id(),
        ]);

        return redirect('/products');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
