<?php

use App\Http\Controllers\DoencaController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\RemoteSubstController;
use App\Http\Controllers\SubstitutionFoodsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {

    Route::prefix('food')->group(function () {

        Route::post('/insert-data', [FoodController::class, 'initializeDatabase']);
        Route::get('/foods', [FoodController::class, 'getFoods']);
        Route::get('/lucas-cachorro/{sickness_type}', [FoodController::class, 'algoritmoGenetico']);
        Route::get('/test/{sickness_type}', [FoodController::class, 'fitness']);
        Route::post('/substituicao-refeicao', [SubstitutionFoodsController::class, 'substituteFoods']);
        Route::get('/foods-recomended/{sickness_type}', [RemoteSubstController::class, 'retornarComidasPossiveis']);
        Route::post('/recomendar-refeicao', [SubstitutionFoodsController::class, 'groupInMeal']);

    });
    
    Route::prefix('doenca')->group(function () {

        Route::post('/criar-doencas', [DoencaController::class, 'InicializarDoenca']);
        Route::get('/mostrar-doencas', [DoencaController::class, 'getAllDoencas']);

        Route::post('/criar-pesos', [DoencaController::class, 'InicializarPesos']);
        Route::get('/mostrar-peso/{doenca_id}', [DoencaController::class, 'getPeso']);
    });

});
