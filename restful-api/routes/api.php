<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Gunain yang ini karena lebih simple ajaa
Route::resource('/students', StudentController::class)->except('create', 'edit')->middleware('auth:sanctum');

//  Route::middleware(['auth:sacntum'])->group(function () {
//      # Method GET
//      Route::get('/students', [StudentController::class, 'index']);
//      Route::get('/students/{id}', [StudentController::class, 'show']);

//      # Method POST
//      Route::post('/students', [StudentController::class, 'store']);
//      Route::put('/students/{id}', [StudentController::class, 'update']);
//      Route::delete('/students/{id}', [StudentController::class, 'destroy']);
// }


// Otentikasi (register & login)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
