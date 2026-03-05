<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
// use Illuminate\Container\Attributes\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')
            ->where('users_id', Auth::id())
            ->latest()
            ->paginate(7);

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
        $imageUrl = null;

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
            'users_id' => Auth::id(),
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
        $validated = $request->validate([
            'product_image' => 'nullable|file|image|mimes:jpg,jpeg,png,webp|max:10048',
            'product_image_remove' => 'nullable|boolean',
            'product_name' => 'required|string|max:255',
            'product_description' => 'required|string|max:500',
            // 'product_quantity' => 'required|integer|min:0',
            'product_price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
        ]);

        $imageUrl = $product->product_image;

        // If user wants to remove the image
        if($request->product_image_remove) {
            if($product->product_image_remove) {
                $oldPath = str_replace('/storage/', '', $product->product_image);
                Storage::disk('public')->delete($oldPath);
            }

            $imageUrl = null;
        }

        // If user uploads a new image
        if ($request->hasFile('product_image')) {

            // delete old image first
            if ($product->product_image) {
                $oldPath = str_replace('/storage/', '', $product->product_image);
                Storage::disk('public')->delete($oldPath);
            }

            $path = $request->file('product_image')->store('product', 'public');
            $imageUrl = Storage::url($path);
        }


        $product->update([
            'product_image' => $imageUrl,
            'product_name' => $validated['product_name'],
            'product_description' => $validated['product_description'],
            // 'product_quantity' => $validated['product_quantity'],
            'product_price' => $validated['product_price'],
            'category_id' => $validated['category_id'],
            'users_id' => Auth::id(),
        ]);

        return redirect('/products');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect('/products');
    }

    public function getStatusCounts() {
        $threshold = 5;
        $userId = Auth::id();
        $totalProducts = Product::where('users_id', $userId)->count();

        $lowStock = Product::where('users_id', $userId)
            ->where('product_quantity', '>', 0)
            ->where('product_quantity', '<=', $threshold)
            ->select('product_code', 'product_name', 'product_quantity', 'product_status')
            ->limit(6)
            ->get();

        $noStock = Product::where('users_id', $userId)
            ->where('product_quantity', 0)
            ->select('product_code', 'product_name', 'product_quantity', 'product_status')
            ->limit(6)
            ->get();

        $statusCounts = [
            'in_stock' => Product::where('users_id', $userId)
                ->where('product_quantity', '>', $threshold)
                ->count(),

            'low_stock' => Product::where('users_id', $userId)
                ->where('product_quantity', '>', 0)
                ->where('product_quantity', '<=', $threshold)
                ->count(),

            'out_of_stock' => Product::where('users_id', $userId)
                ->where('product_quantity', 0)
                ->count(),
        ];

        return inertia('Mainpages/dashboard', [
            'totalProducts' => $totalProducts,
            'statusCounts' => $statusCounts,
            'lowStock' => $lowStock,
            'noStock' => $noStock
        ]);
    }

    public function getCategories() {
        $userId = Auth::id();
        $categories = Category::withCount([
            'products as products_quantity' => function ($query) use ($userId) {
                $query->where('users_id', $userId);
            }
        ])->paginate(6);

        return Inertia::render('Mainpages/categories', [
            'categories' => $categories
        ]);
    }

    public function getProducts() {
        $products = Product::with('category')
            ->where('users_id', Auth::id())->latest()->paginate(5);

        $categories = Category::all();

        return inertia::render('Mainpages/stock', [
            'products' => $products,
            'categories' => $categories
        ]);
    }

    public function updateQuantities(Request $request)
    {
        foreach ($request->quantities as $id => $quantity) {
            Product::where('id', $id)->update([
                'product_quantity' => $quantity
            ]);
        }

        return back();
    }
}
