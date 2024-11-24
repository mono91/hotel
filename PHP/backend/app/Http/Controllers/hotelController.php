<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ciudad;
use App\Models\Hotel;
use App\Models\Habitacion;

class hotelController extends Controller
{
    public function getCiudades(){
        $ciudades = Ciudad::all();
        return response()->json($ciudades, 200);
    }

    public function hoteles(){
        $hoteles = Hotel::all();
        return response()->json($hoteles, 200);
    }

    public function nuevoHotel(Request $request){
        
        $hotel = Hotel::create([
            'nombre' => $request->nombre,
            'direccion' => $request->direccion,
            'ciudad' => $request->ciudad,
            'nit' => $request->nit,
            'numeroHabitaciones' => $request->numeroHabitaciones
        ]);
        return response()->json($hotel, 200);
    }

    public function nuevaHabitacion(Request $request){
        $habitacion = Habitacion::create([
            'habitaciones' => $request->habitaciones,
            'tipo' => $request->tipo,
            'acomodacion' => $request->acomodacion,
            'hotel' => $request->fkHotel
        ]);
        return response()->json($habitacion, 200);
    }
    
    public function habitaciones($id){
        $habitaciones = Habitacion::where("hotel", $id)->get();
        return response()->json($habitaciones, 200);
    }

}
