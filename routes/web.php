<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [ProductController::class, 'getCategoriesOptions'])->name('welcome');
Route::resource('products', ProductController::class)->except('index');
Route::get('/dashboard', fn() => Inertia::render('Mainpages/dashboard'))->name('dashboard');
Route::get('/products', fn() => Inertia::render('Mainpages/products'))->name('products');
Route::get('/categories', fn() => Inertia::render('Mainpages/categories'))->name('categories');
Route::get('/stock', fn() => Inertia::render('Mainpages/stock'))->name('stock');
Route::get('/reports', fn() => Inertia::render('Mainpages/reports'))->name('reports');


require __DIR__.'/settings.php';
