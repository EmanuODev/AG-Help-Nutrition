<?php

use App\Http\Controllers\FoodController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
 
    Route::post('/insert-data', [FoodController::class, 'initializeDatabase']);
    Route::get('/foods', [FoodController::class, 'getFoods']);
    Route::get('/lucas-cachorro/{sickness_type}', [FoodController::class, 'algoritmoGenetico']);
    Route::get('/test/{sickness_type}', [FoodController::class, 'fitness']);

});
