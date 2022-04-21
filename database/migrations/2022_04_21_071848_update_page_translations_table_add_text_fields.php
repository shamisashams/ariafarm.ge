<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePageTranslationsTableAddTextFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('page_translations', function (Blueprint $table) {

            $table->longText('text_top')->nullable();
            $table->longText('text_medium')->nullable();
            $table->longText('text_bottom')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('page_translations', function (Blueprint $table) {

            $table->dropColumn('text_top');
            $table->dropColumn('text_medium');
            $table->dropColumn('text_bottom');

        });
    }
}
