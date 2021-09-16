<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InscriptionController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Inscription::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Inscription::create([
            'matricule' => $request->input('matricule'),
            'nom' => $request->input('nom'),
            'prenom' => $request->input('prenom'),
            'code_tontine' => $request->input('code_tontine'),
            'designation' => $request->input('designation'),
            'nbre_cot' => $request->input('nbre_cot'),
            'cot_rest' => $request->input('cot_rest')
        ]);
    }

    public function getMemberByTontine($code){

        $query = DB::table('inscriptions')
            ->join('tontines', 'inscriptions.code_tontine', '=', 'tontines.code')
            ->where('inscriptions.designation', '=', $code)
            ->select('inscriptions.*')
            ->get();

        return response()->json($query, 200);

    }

    public function getDistinctMembers($mat, $code){

        $query = DB::table('inscriptions')
                ->where('matricule', '<>', $mat)
                ->where('code_tontine', '=', $code)
                ->get();

        return response()->json($query, 200);
        
    }

    public function getCountRowsByCode($code){

        $query = DB::table('inscriptions')
                ->where('code_tontine', '=', $code)
                ->count();
        
        return response()->json($query, 200);

    }
   
}
