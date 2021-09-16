<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tontine extends Model
{
    use HasFactory;

    protected $table = 'tontines';

    protected $fillable = [
        'code',
        'designation',
        'frequence',
        'cotisation'
    ];

    public $timestamps = false;
}
