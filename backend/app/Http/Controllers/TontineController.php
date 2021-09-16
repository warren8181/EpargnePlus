<?php

namespace App\Http\Controllers;
use App\Http\Helpers;

use App\Models\Tontine;
use Illuminate\Http\Request;

class TontineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Tontine::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Tontine::create([
            'code' => $request->input('code'),
            'designation' => $request->input('designation'),
            'frequence' => $request->input('frequence'),
            'cotisation' => $request->input('cotisation'),
        ]);
    }

    public function getTontineById($id)
    {
        $tontine = Tontine::find($id);
        return response()->json($tontine, 200);
    }


}
