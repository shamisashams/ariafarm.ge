<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageCardTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('card_slider_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('card_slider_id')->unsigned();
            $table->string('locale')->index();

            $table->text('text')->nullable();


            $table->unique(['card_slider_id','locale']);
            $table->foreign('card_slider_id')
                ->references('id')
                ->on('card_slider')
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
        Schema::dropIfExists('card_slider_translations');
    }
}
