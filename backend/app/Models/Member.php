<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $table = 'adherents';

    protected $fillable = [
        'matricule',
        'nom',
        'prenom',
        'tel',
        'sexe',
        'localisation'
    ];

    public $timestamps = false;
}
