<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductCardTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_card_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('product_card_id')->unsigned();
            $table->string('locale')->index();

            $table->text('text')->nullable();


            $table->unique(['product_card_id','locale']);
            $table->foreign('product_card_id')
                ->references('id')
                ->on('product_cards')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_card_translations');
    }
}
