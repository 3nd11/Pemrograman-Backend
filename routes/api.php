<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
#menampilkan data
Route::get("/students", [StudentController::class, 'index']);

#menampilkan data 1 per 1
Route::get("/students/{id}", [StudentController::class, 'show']);

#menambahkan data
Route::post("/students", [StudentController::class, 'store']);


Route::put("/students/{id}", [StudentController::class, 'update']);


Route::delete("/students/{id}", [StudentController::class, 'destroy']);
