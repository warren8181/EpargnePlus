<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cotisation extends Model
{
    use HasFactory;

    protected $table = 'cotisations';

    protected $fillable = [
        'matricule',
        'nom',
        'prenom',
        'cot',
        'montantVerse',
        'dettes'
    ];

    public $timestamps = false;
}
