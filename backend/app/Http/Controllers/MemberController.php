<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Member::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Member::create([
            'matricule' => $request->input('matricule'),
            'nom' => $request->input('nom'),
            'prenom' => $request->input('prenom'),
            'tel' => $request->input('tel'),
            'sexe' => $request->input('sexe'),
            'localisation' => $request->input('localisation'),
        ]);
    }

    public function getMemberById($id)
    {
        $member = Member::find($id);
        return response()->json($member, 200);
    }

    public function userCount()
    {
        return response()->json(Member::all()->count(), 200);
    }
}
