<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/user', [\App\Http\Controllers\AuthController::class, 'user']);

});


/**
 *  Routes for Association package
 */
Route::post('/newton', [\App\Http\Controllers\TontineController::class, 'store']);
Route::get('/allton', [\App\Http\Controllers\TontineController::class, 'index']);
Route::get('/gettonbyid/{id}', [\App\Http\Controllers\TontineController::class, 'getTontineById']);
Route::get('/getCountUsers', [\App\Http\Controllers\MemberController::class, 'userCount']);

Route::post('/newmember', [\App\Http\Controllers\MemberController::class, 'store']);
Route::get('/allmembers', [\App\Http\Controllers\MemberController::class, 'index']);
Route::get('/getmemberbyid/{id}', [\App\Http\Controllers\MemberController::class, 'getMemberById']);

Route::post('/newsouscription', [\App\Http\Controllers\InscriptionController::class, 'store']);
Route::get('/allsouscriptions', [\App\Http\Controllers\InscriptionController::class, 'index']);
Route::get('/getMemberByTontine/{code}', [\App\Http\Controllers\InscriptionController::class, 'getMemberByTontine']);
Route::get('/getDistinctMembers/{mat}/{code}', [\App\Http\Controllers\InscriptionController::class, 'getDistinctMembers']);
Route::get('/getCountRowsByCode/{code}', [\App\Http\Controllers\InscriptionController::class, 'getCountRowsByCode']);

Route::post('/newcotisation', [\App\Http\Controllers\CotisationController::class, 'store']);
Route::get('/allcotisations/{date}', [\App\Http\Controllers\CotisationController::class, 'index']);
Route::get('/getTotal/{date}', [\App\Http\Controllers\CotisationController::class, 'getTotal']);

Route::post('/assigntontine', [\App\Http\Controllers\AchatTontineController::class, 'store']);
