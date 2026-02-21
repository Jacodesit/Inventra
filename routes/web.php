<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', fn() => Inertia::render('welcome'));
Route::resource('products', ProductController::class)->except('index');
Route::get('/dashboard', [ProductController::class, 'getStatusCounts'])->name('dashboard');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/categories', [ProductController::class, 'getCategories'])->name('categories');
Route::get('/stock', fn() => Inertia::render('Mainpages/stock'))->name('stock');
Route::get('/reports', fn() => Inertia::render('Mainpages/reports'))->name('reports');


require __DIR__.'/settings.php';
