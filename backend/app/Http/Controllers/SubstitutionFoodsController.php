<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class SubstitutionFoodsController extends Controller
{

    protected $foodsService;

    public function __construct(FoodController $foodsService)
    {
        $this->foodsService = $foodsService;
    }

    /**
     * Função auxiliar para mapear a categorias e inferí-la em um grupo nutricional mais determinístico
     */
    public function mapCategoriaGrupo($foodCategory){
        
        $categoria = strtolower(trim($foodCategory));
        
        if (str_contains($categoria, 'cereais') ||
            str_contains($categoria, 'panificado') ||
            str_contains($categoria, 'farinha') ||
            str_contains($categoria, 'tuberosa')) {
            return 'Carboidrato';

        } else if (str_contains($categoria, 'carne') ||
                str_contains($categoria, 'ave') ||
                str_contains($categoria, 'ovo') ||
                str_contains($categoria, 'pescado') ||
                str_contains($categoria, 'víscera')) {
            return 'Proteína';

        } else if (str_contains($categoria, 'hortaliças folhosas')) {
            return 'Salada';

        } else if (str_contains($categoria, 'fruta') || str_contains($categoria, 'doce')) {
            return 'Fruta ou Doce';

        } else if (str_contains($categoria, 'laticínio') || str_contains($categoria, 'bebida')) {
            return 'Bebida ou Laticínio';

        } else if (str_contains($categoria, 'Óleo') || str_contains($categoria, 'gordura')) {
            return 'Gordura';

        } else if (str_contains($categoria, 'condimento') ||
                str_contains($categoria, 'sal') ||
                str_contains($categoria, 'tempero')) {
            return 'Condimento';
        } else {
            return 'Outros'; // Para Miscelâneas, Enlatados, erros ou categorias incomuns
        }
    }

    /**
     * Calcula somatório nutricional da refeição.
     */
    public function calculateMealSummary(array $meal){
        
        $summary = [
            'Energia_kcal' => 0.0,
            'Carboi_drato_g' => 0.0,
            'Proteina_g' => 0.0,
            'Gorduras_Saturadas' => 0.0,
            'Gorduras_Trans' => 0.0,
            'Gorduras_Totais' => 0.0,
            'Acucar_total_g' => 0.0
        ];

        foreach ($meal as $food) {
            if ($food) {
                $summary['Energia_kcal'] += $food['Energia_kcal'];
                $summary['Carboi_drato_g'] += $food['Carboi_drato_g'];
                $summary['Proteina_g'] += $food['Proteina_g'];
                $summary['Gorduras_Saturadas'] += $food['AG_Satura_dos_g'];
                $summary['Acucar_total_g'] += $food['Acucar_total_g'];
                $summary['Gorduras_Totais'] += ($food['AG_Satura_dos_g'] + $food['AG_Mono_g'] + $food['AG_Poli_g'] + $food['AG_Lino_leico_g'] + $food['AG_Linole_nico_g']);
                $summary['Gorduras_Trans'] += $food['AG_Trans_total_g'];
            }
        }

        return $summary;
    }
    
    /**
    * Função para montar 1 refeição com: Carboidrato, Proteína, Salada, Fruta ou Doce, Bebida ou Laticínio
    */

    public function groupInMeal(Request $request){
        
        $cromossomoFoods = $request->cromossomoFoods;

        //dd($cromossomoFoods);

        $grupos = [
            'Carboidrato' => [],
            'Proteína' => [],
            'Salada' => [],
            'Fruta ou Doce' => [],
            'Bebida ou Laticínio' => [],
        ];

        foreach($cromossomoFoods as $food){
            $grupo = $this->mapCategoriaGrupo($food["Categoria"]);

            $grupos[$grupo][] = $food;
        }

        $new_refeicao = [];

        foreach($grupos as $grupo => $foodItem){

            if (count($foodItem) > 0 ) {

                $escolha = $foodItem[array_rand($foodItem)];
    
                $new_refeicao[] = $escolha;

            }

        }

        return response()->json(["refeicao" => $new_refeicao, "macronutrientes" => $this->calculateMealSummary($new_refeicao)], 200);

    }

    /**
     * Função que define 1 ou mais substituições de alimentos em uma refeição
     */

    public function substituteFoods(Request $request){

        $mealSubstitutes = $request->mealSubstitutes;
        $refeicao = $request->refeicao;
        $count = 0;

        $recomended = $this->recomendedFoods($mealSubstitutes);

        $refeicao_final = [];

        foreach($refeicao as $food){

            if(in_array($food, $mealSubstitutes)) 
                $refeicao_final[] = $recomended[$count++];

            else
                $refeicao_final[] = $food;

        }

        return response()->json(["refeicao" => $refeicao_final , "macronutrientes" => $this->calculateMealSummary($refeicao_final)], 200);

    }

    
    // Função auxiliar para recomendar um alimento
    public function recomendedFoods($subst){
        
        $recomended = [];

        $subMacro = $this->calculateMealSummary($subst);

        foreach($subst as $subFood){
            
            $foodsCategory = Food::where('Categoria', "LIKE", $subFood["Categoria"])->get()->toArray();
            
            $tentativa = 0;
            do{
                $sorted = $foodsCategory[array_rand($foodsCategory)];
                $sorted_array = [$sorted];
                $newSubMacro = $this->calculateMealSummary($sorted_array);
                $tentativa++;
            }while(!$this->isValidRecomended($subMacro, $newSubMacro) && $tentativa < 100);

            $recomended[] = $sorted;
        }

        return $recomended;
    }

    //Função auxiliar booleana
    public function isValidRecomended($summarySub, $summaryNew){
        if($summaryNew['Energia_kcal'] <= ($summarySub['Energia_kcal'] + $summarySub['Energia_kcal']*0.1)){
            return true;
        }else{
            return false;
        }
    }
    
}