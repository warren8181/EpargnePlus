<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    use HasFactory;

    protected $table = 'inscriptions';

    protected $fillable = [
        'matricule',
        'nom',
        'prenom',
        'code_tontine',
        'designation',
        'nbre_cot',
        'cot_rest'
    ];

    public $timestamps = false;

}
