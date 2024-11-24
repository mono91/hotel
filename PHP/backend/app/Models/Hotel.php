<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $table = "hotel";

    protected $fillable = [
        "nombre",
        "direccion",
        "ciudad",
        "nit",
        "numeroHabitaciones"
    ];
}
