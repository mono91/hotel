<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\hotelController;

Route::get('/ciudades', [hotelController::class, "getCiudades"]);

Route::post('/nuevohotel', [hotelController::class, "nuevoHotel"]);

Route::post('/habitacion', [hotelController::class, "nuevaHabitacion"]);

Route::get('/hoteles', [hotelController::class, "hoteles"]);

Route::get('/habitaciones/{id}', [hotelController::class, "habitaciones"]);
