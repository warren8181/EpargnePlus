<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AchatTontine extends Model
{
    use HasFactory;

    protected $table = 'achattontine';

    protected $fillable = [
        'num_tontine',
        'mat_benef',
        'mat_avalisse',
        'mont_achete',
        'prix_achat',
        'net'
    ];

    public $timestamps = false;
}
