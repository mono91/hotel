<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    protected $table = "habitacion";

    protected $fillable = [
        "habitaciones",
        "tipo",
        "acomodacion",
        "hotel"
    ];
}
