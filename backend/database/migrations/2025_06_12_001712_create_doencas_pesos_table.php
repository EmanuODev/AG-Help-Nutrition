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
        Schema::create('doencas_pesos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doenca_id');
            $table->integer('Energia_kcal');
            $table->integer('Proteina_g');
            $table->integer('Lipidios_totais_g');
            $table->integer('Carboi_drato_g');
            $table->integer('Fibra_alimentar_total_g');
            $table->integer('Coles_terol_mg');
            $table->integer('AG_Satura_dos_g');
            $table->integer('AG_Mono_g');
            $table->integer('AG_Poli_g');
            $table->integer('AG_Lino_leico_g');
            $table->integer('AG_Linole_nico_g');
            $table->integer('AG_Trans_total_g');
            $table->integer('Acucar_total_g');
            $table->integer('Acucar_de_adicacao_g');
            $table->integer('Calcio_mg');
            $table->integer('Mag_nesio_mg');
            $table->integer('Man_ganes_mg');
            $table->integer('Fosforo_mg');
            $table->integer('Ferro_mg');
            $table->integer('Sodio_mg');
            $table->integer('Sodio_de_adicao_mg');
            $table->integer('Potas_sio_mg');
            $table->integer('Co_bre_mg');
            $table->integer('Zinco_mg');
            $table->integer('Sele_nio_mcg');
            $table->integer('Reti_nol_mcg');
            $table->integer('Vitami_na_A_RAE_mcg');
            $table->integer('Tiami_na_mg');
            $table->integer('Ribofla_vina_mg');
            $table->integer('Niaci_na_mg');
            $table->integer('Niaci_na_NE_mg');
            $table->integer('Pirido_xina_mg');
            $table->integer('Coba_lami_na_mcg');
            $table->integer('Folato_DFE_mcg');
            $table->integer('Vitami_na_D_mcg');
            $table->integer('Vitami_na_E_mg');
            $table->integer('Vitami_na_C_mg');
            $table->timestamps();

            $table->foreign('doenca_id')->references('id')->on('doencas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doencas_pesos');
    }
};
