<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DoencaPeso extends Model
{
    
    protected $table = "doencas_pesos";

    protected $fillable = [
        "doenca_id",
        "Energia_kcal",
        "Proteina_g",
        "Lipidios_totais_g",
        "Carboi_drato_g",
        "Fibra_alimentar_total_g",
        "Coles_terol_mg",
        "AG_Satura_dos_g",
        "AG_Mono_g",
        "AG_Poli_g",
        "AG_Lino_leico_g",
        "AG_Linole_nico_g",
        "AG_Trans_total_g",
        "Acucar_total_g",
        "Acucar_de_adicacao_g",
        "Calcio_mg",
        "Mag_nesio_mg",
        "Man_ganes_mg",
        "Fosforo_mg",
        "Ferro_mg",
        "Sodio_mg",
        "Sodio_de_adicao_mg",
        "Potas_sio_mg",
        "Co_bre_mg",
        "Zinco_mg",
        "Sele_nio_mcg",
        "Reti_nol_mcg",
        "Vitami_na_A_RAE_mcg",
        "Tiami_na_mg",
        "Ribofla_vina_mg",
        "Niaci_na_mg",
        "Niaci_na_NE_mg",
        "Pirido_xina_mg",
        "Coba_lami_na_mcg",
        "Folato_DFE_mcg",
        "Vitami_na_D_mcg",
        "Vitami_na_E_mg",
        "Vitami_na_C_mg",

    ];

}
