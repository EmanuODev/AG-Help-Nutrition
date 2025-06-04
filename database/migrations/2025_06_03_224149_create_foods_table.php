<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('foods', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('Codigo');
            $table->string('descricacao_do_alimento', 255);
            $table->string('Categoria', 255);
            $table->integer('Codigo_de_preparacao');
            $table->string('descricao_da_preparacao', 255);
            $table->float('Energia_kcal')->nullable();
            $table->float('Proteina_g')->nullable();
            $table->float('Lipidios_totais_g')->nullable();
            $table->float('Carboi_drato_g')->nullable();
            $table->float('Fibra_alimentar_total_g')->nullable();
            $table->float('Coles_terol_mg')->nullable();
            $table->float('AG_Satura_dos_g')->nullable();
            $table->float('AG_Mono_g')->nullable();
            $table->float('AG_Poli_g')->nullable();
            $table->float('AG_Lino_leico_g')->nullable();
            $table->float('AG_Linole_nico_g')->nullable();
            $table->float('AG_Trans_total_g')->nullable();
            $table->float('Acucar_total_g')->nullable();
            $table->float('Acucar_de_adicacao_g')->nullable();
            $table->float('Calcio_mg')->nullable();
            $table->float('Mag_nesio_mg')->nullable();
            $table->float('Man_ganes_mg')->nullable();
            $table->float('Fosforo_mg')->nullable();
            $table->float('Ferro_mg')->nullable();
            $table->float('Sodio_mg')->nullable();
            $table->float('Sodio_de_adicao_mg')->nullable();
            $table->float('Potas_sio_mg')->nullable();
            $table->float('Co_bre_mg')->nullable();
            $table->float('Zinco_mg')->nullable();
            $table->float('Sele_nio_mcg')->nullable();
            $table->float('Reti_nol_mcg')->nullable();
            $table->float('Vitami_na_A_RAE_mcg')->nullable();
            $table->float('Tiami_na_mg')->nullable();
            $table->float('Ribofla_vina_mg')->nullable();
            $table->float('Niaci_na_mg')->nullable();
            $table->float('Niaci_na_NE_mg')->nullable();
            $table->float('Pirido_xina_mg')->nullable();
            $table->float('Coba_lami_na_mcg')->nullable();
            $table->float('Folato_DFE_mcg')->nullable();
            $table->float('Vitami_na_D_mcg')->nullable();
            $table->float('Vitami_na_E_mg')->nullable();
            $table->float('Vitami_na_C_mg')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foods');
    }
};
