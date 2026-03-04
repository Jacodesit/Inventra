<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', fn() => Inertia::render('welcome'));
Route::resource('products', ProductController::class)->except('index');
Route::get('/dashboard', [ProductController::class, 'getStatusCounts'])->name('dashboard');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/categories', [ProductController::class, 'getCategories'])->name('categories');
Route::get('/stock', [ProductController::class, 'getProducts'])->name('stock');
Route::get('/reports', fn() => Inertia::render('Mainpages/reports'))->name('reports');

// Adding, Editing, and Deleting a category
Route::post('/categories', [CategoriesController::class, 'store'])->name('category.store');
Route::put('/categories/{category}', [CategoriesController::class, 'update'])->name('category.update');
Route::delete('/categories/{category}', [CategoriesController::class, 'destroy'])->name('category.delete');

// Updating quantity
Route::patch('/stock/update-quantities', [ProductController::class, 'updateQuantities'])->name('update-quantity');

require __DIR__.'/settings.php';
