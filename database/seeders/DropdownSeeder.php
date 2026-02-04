<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DropdownSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $options = [
            ['name' => 'Food', 'description' => 'Snacks and ingredients'],
            ['name' => 'Drinks', 'description' => 'Beverages all of kinds'],
            ['name' => 'Supplies', 'description' => 'Daily essentials'],
            ['name' => 'Accessories', 'description' => 'Extra items and tools']
        ];

        DB::table('categories')->insert($options);
    }
}
