<?php

namespace App\Http\Controllers;

use App\Models\AchatTontine;
use Illuminate\Http\Request;

class AchatTontineController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return AchatTontine::create([
            'num_tontine' => $request->input('num_tontine'),
            'mat_benef' => $request->input('mat_benef'),
            'mat_avalisse' => $request->input('mat_avalisse'),
            'mont_achete' => $request->input('mont_achete'),
            'prix_achat' => $request->input('prix_achat'),
            'net' => $request->input('net'),
        ]);
    }
}
