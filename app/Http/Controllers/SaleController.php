<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sales = Sale::with('product')->where('user_id', Auth::id())->latest()->get();
        $products = Product::where('users_id', Auth::id())->get();

        return inertia::render('Mainpages/sales', [
            'sales' => $sales,
            'products' => $products
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
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'total' => ['required','numeric','min:0', function($attribute, $value, $fail) use ($request) {
                if ($value != $request->quantity * $request->price) {
                    $fail('Total does not match quantity times price.');
                }
            }],
        ]);

        // Get the product
        $product = Product::findOrFail($validated['product_id']);

        // Prevent selling more than available stock
        if ($validated['quantity'] > $product->product_quantity) {
            return back()->withErrors([
                'quantity' => 'Not enough stock available.'
            ]);
        }

        // Create the sale
        Sale::create([
            'user_id' => Auth::id(),
            'product_id' => $validated['product_id'],
            'quantity' => $validated['quantity'],
            'price' => $validated['price'],
            'total' => $validated['total'],
        ]);

        // Reduce product stock
        $product->product_quantity -= $validated['quantity'];
        $product->save();

        return redirect('/sales');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
