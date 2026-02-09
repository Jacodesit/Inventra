<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'category_id',
        'product_code',
        'product_image',
        'product_name',
        'product_description',
        'product_quantity',
        'product_price',
        'product_status',
        'users_id'
    ];

    protected static function booted() {
        static::creating(function($product) {
            $product->product_code = 'PRD'. rand(10000, 99999);
        });
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
