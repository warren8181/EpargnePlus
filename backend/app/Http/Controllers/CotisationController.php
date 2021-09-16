<?php

namespace App\Http\Controllers;

use App\Models\Cotisation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CotisationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($date)
    {
        $query = DB::table('cotisations')
            ->where('cotisations.created_at', '=', $date)
            ->get();
            
        return response()->json($query, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Cotisation::create([
            'matricule' => $request->input('matricule'),
            'nom' => $request->input('nom'),
            'prenom' => $request->input('prenom'),
            'cot' => $request->input('cot'),
            'montantVerse' => $request->input('montantVerse'),
            'dettes' => $request->input('dettes'),
        ]);
    }

    public function getTotal($date){

        $query = DB::table('cotisations')
            ->where('cotisations.created_at', '=', $date)
            ->sum('cotisations.montantVerse');


        return response()->json($query, 200);
    }
}
