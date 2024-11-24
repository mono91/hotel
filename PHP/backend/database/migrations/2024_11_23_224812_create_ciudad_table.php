<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ciudad', function (Blueprint $table) {
            $table->id();
            $table->string("nombre");
            $table->timestamps();            
        });

        DB::table("ciudad")->insert([
            ["nombre" => "Bogota"],
            ["nombre" => "Medellin"],
            ["nombre" => "Cartagena"],
            ["nombre" => "Bucaramanga"],
            ["nombre" => "Ibague"],
            ["nombre" => "Barranquilla"],
            ["nombre" => "Cali"],
            ["nombre" => "Santa Marta"],
            ["nombre" => "Pereira"],
            ["nombre" => "Villavicencio"],
            ["nombre" => "Cucuta"],
            ["nombre" => "Manizales"],
            ["nombre" => "Pasto"],
            ["nombre" => "Neiva"],
            ["nombre" => "Riohacha"],
            ["nombre" => "Popayan"]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ciudad');
    }
};
