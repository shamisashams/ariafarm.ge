<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Page::truncate();
        // Pages array
        $pages = [
            [
                'key' => 'home'
            ],
            [
                'key' => 'contact'
            ],
            [
                'key' => 'products'
            ],
            [
                'key' => 'blog'
            ],
            [
                'key' => 'farm'
            ],
            [
                'key' => 'enterprise'
            ],
            [
                'key' => 'shop'
            ],
            [
                'key' => 'gallery'
            ],
            [
                'key' => 'special_offer'
            ],
            [
                'key' => 'search'
            ]

        ];

        // Insert Pages
        Page::insert($pages);
    }
}
