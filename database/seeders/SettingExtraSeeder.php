<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingExtraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Settings array
        $Settings = [
            [
                'key' => 'phone2'
            ],
            [
                'key' => 'address2'
            ],


        ];

        // Insert Settings
        Setting::insert($Settings);
    }
}
