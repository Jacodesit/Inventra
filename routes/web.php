<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [ProductController::class, 'getCategoriesOptions'])->name('welcome');
Route::resource('products', ProductController::class)->except('index');
Route::get('/home', fn() => Inertia::render('Mainpages/home'))->name('home');

require __DIR__.'/settings.php';
