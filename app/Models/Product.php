<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

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
        'users_id',
        'created_at'
    ];

    protected static function booted() {
        static::creating(function($product) {
            $product->product_code = 'PRD'. rand(10000, 99999);

            if ($product->product_quantity <= 0) $product->product_status = 'out_of_stock';
            elseif ($product->product_quantity <= 5) $product->product_status = 'low_stock';
            else $product->product_status = 'in_stock';
        });

        static::updating(function ($product) {
            if ($product->product_quantity <= 0) $product->product_status = 'out_of_stock';
            elseif ($product->product_quantity <= 5) $product->product_status = 'low_stock';
            else $product->product_status = 'in_stock';
        });
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function sales() {
        return $this->hasMany(Sale::class);
    }

    public function getStockAttribute() {
        if($this->product_quantity <= 0) return 'Out of Stock';
        if($this->product_quantity <= 5) return 'Low Stock';

        return 'In Stock';
    }

    public function getStockStatusAttribute(): string {
        if ($this->product_quantity <= 0) return 'out_of_stock';
        if ($this->product_quantity <= 5) return 'low_stock';
        return 'in_stock';
    }

    public function getExpectedIncomeAttribute(): float {
        return $this->product_quantity * $this->product_price;
    }

    public function getFormattedDateAttribute(): string {
        return Carbon::parse($this->created_at)->format('F j,  Y, g:i A');
    }

    protected $appends = ['stock', 'stock_status', 'expected_income', 'formatted_date'];
}
