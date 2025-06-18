<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RemoteSubstController extends Controller
{
    protected $foodsService;

    public function __construct(FoodController $foodsService)
    {
        $this->foodsService = $foodsService;
    }

    public function retornarComidasPossiveis($doencaId){
        
        $pesos = app(DoencaController::class)->getPeso($doencaId);
        
        $alimentos = \App\Models\Food::all();
        $alimentosCalculados = [];
        $riscosTotais = 0; //Para acessar o somatório de todos os riscos dos alimentos obtidos

        foreach($alimentos as $comida){
            
            $riscoAlimento = 0;

            foreach($pesos as $nutriente => $pesoValor){
                $valorNutriente = ($comida->$nutriente ? $comida->$nutriente : 0); //Verificar se o campo não é NULL
                $riscoAlimento += ($valorNutriente * $pesoValor);
            }

            $alimentosCalculados[] = [
                'comida' => $comida,
                'risco' => $riscoAlimento
            ];

            $riscosTotais += $riscoAlimento;
        }

        // Calcular a média aritmética da ponderada dos riscos dos alimentos
        // Objetivo: Encontrar o limite médio para trabalhar com o valor mínimo do mesmo
        $mediaRisco = $riscosTotais / count($alimentosCalculados);
        $mediaRisco = $mediaRisco * 0.5; //Garantir os alimentos mais baixo risco

        $alimentosFiltrados = array_filter($alimentosCalculados, function($item) use($mediaRisco){
            return $item['risco'] <= $mediaRisco;
        });

        //Resultao conterá um array de objetos do tipo food (id, descricao...)
        $resultado = array_map(function($item){
            return $item['comida'];
        }, $alimentosFiltrados);


        return response()->json($resultado, 200);
    }

}
