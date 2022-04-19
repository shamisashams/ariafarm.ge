<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateProductTranslationsTableAddAttributes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('product_translations', function (Blueprint $table) {
            $table->text('composition')->nullable();
            $table->text('recommendation')->nullable();
            $table->text('recipe')->nullable();
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
        Schema::table('product_translations', function (Blueprint $table) {
            $table->dropColumn('composition');
            $table->dropColumn('recommendation');
            $table->dropColumn('recipe');
        });
    }
}
