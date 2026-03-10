<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', fn() => Inertia::render('welcome'))->name('welcome');
Route::resource('products', ProductController::class)->except('index');
Route::get('/dashboard', [ProductController::class, 'getStatusCounts'])->name('dashboard');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/categories', [ProductController::class, 'getCategories'])->name('categories');
Route::get('/stock', [ProductController::class, 'getProductsForStock'])->name('stock');
Route::get('/sales', [ProductController::class, 'getProductsForSales'])->name('sales');
Route::get('/reports', fn() => Inertia::render('Mainpages/reports'))->name('reports');

// Adding, Editing, and Deleting a category
Route::post('/categories', [CategoriesController::class, 'store'])->name('category.store');
Route::put('/categories/{category}', [CategoriesController::class, 'update'])->name('category.update');
Route::delete('/categories/{category}', [CategoriesController::class, 'destroy'])->name('category.delete');

// Updating quantity
Route::patch('/stock/update-quantities', [ProductController::class, 'updateQuantities'])->name('update-quantity');

// Editing user details
Route::patch('/settings/profile', [ProfileController::class, 'update'])->name('profile.update');

// Updating or changing user password
Route::patch('/settings/password', [PasswordController::class, 'update'])->name('settings.password.update')->middleware('auth');

// Resetting a forgot password
Route::post('/reset-password/{token}', function (Request $request, $token) {
    return Inertia::render('auth/reset-password', [
        'token' => $token,
        'email' => $request->email,
    ]);
})->name('password.update');

// Adding sales
Route::post('/sales', [SaleController::class, 'store'])->name('sales.store');

require __DIR__.'/settings.php';
