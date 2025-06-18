import type { ComponentProps } from "react";
import { IoClose } from "react-icons/io5";
import { TabelaNutricional } from "./tabela_nutricional";

type AlimentoProps = {

    "id": number,
    "Codigo": number,
    "descricacao_do_alimento": string,
    "Categoria": string,
    "Codigo_de_preparacao": number,
    "descricao_da_preparacao": string,
    "Energia_kcal": number,
    "Proteina_g": number,
    "Lipidios_totais_g": number,
    "Carboi_drato_g": number,
    "Fibra_alimentar_total_g": number,
    "Coles_terol_mg": number,
    "AG_Satura_dos_g": number,
    "AG_Mono_g": number,
    "AG_Poli_g": number,
    "AG_Lino_leico_g": number,
    "AG_Linole_nico_g": number,
    "AG_Trans_total_g": number,
    "Acucar_total_g": number,
    "Acucar_de_adicacao_g": number,
    "Calcio_mg": number,
    "Mag_nesio_mg": number,
    "Man_ganes_mg": number,
    "Fosforo_mg": number,
    "Ferro_mg": number,
    "Sodio_mg": number,
    "Sodio_de_adicao_mg": number,
    "Potas_sio_mg": number,
    "Co_bre_mg": number,
    "Zinco_mg": number,
    "Sele_nio_mcg": number,
    "Reti_nol_mcg": number,
    "Vitami_na_A_RAE_mcg": number,
    "Tiami_na_mg": number,
    "Ribofla_vina_mg": number,
    "Niaci_na_mg": number,
    "Niaci_na_NE_mg": number,
    "Pirido_xina_mg": number,
    "Coba_lami_na_mcg": number,
    "Folato_DFE_mcg": number,
    "Vitami_na_D_mcg": number,
    "Vitami_na_E_mg": number,
    "Vitami_na_C_mg": number,
    "created_at": Date,
    "updated_at": Date,

}

interface DetalhesAlimentosProps extends ComponentProps<'div'> {

    setModal: Function,
    alimento: AlimentoProps

}

export function DetalhesAlimentos( props: DetalhesAlimentosProps ) {

    return (
        <div className="fixed z-30 inset-0 h-screen w-full bg-[#444444b7] flex justify-center items-center">
            <div className="h-[55rem] w-[90rem] bg-white p-7">
                <div className="w-full flex justify-between items-center mb-8">
                    <h1 className="text-[2.4rem] font-Outfit font-bold text-gray-800">Tabela Nutricional</h1>
                    <button onClick={() => {props.setModal(false)}} className="bg-red-700 text-white p-3 rounded-lg cursor-pointer text-2xl"><IoClose /></button>
                </div>
                <div className="w-full flex flex-col items-center">
                    {/* 1 ─────────────── Descrições gerais */}
                    <TabelaNutricional
                        titulos={[
                        "Descrição do Alimento",
                        "Categoria",
                        "Descrição da Preparação",
                        "Energia (kcal)",
                        ]}
                        descricoes={[
                        props.alimento.descricacao_do_alimento,
                        props.alimento.Categoria,
                        props.alimento.descricao_da_preparacao,
                        props.alimento.Energia_kcal,
                        ]}
                    />

                    {/* 2 */}
                    <TabelaNutricional
                        titulos={[
                        "Proteína (g)",
                        "Lipídios Totais (g)",
                        "Carboidrato (g)",
                        "Fibra Alimentar Total (g)",
                        ]}
                        descricoes={[
                        props.alimento.Proteina_g,
                        props.alimento.Lipidios_totais_g,
                        props.alimento.Carboi_drato_g,
                        props.alimento.Fibra_alimentar_total_g,
                        ]}
                    />

                    {/* 3 */}
                    <TabelaNutricional
                        titulos={[
                        "Colesterol (mg)",
                        "AG Saturados (g)",
                        "AG Mono (g)",
                        "AG Poli (g)",
                        ]}
                        descricoes={[
                        props.alimento.Coles_terol_mg,
                        props.alimento.AG_Satura_dos_g,
                        props.alimento.AG_Mono_g,
                        props.alimento.AG_Poli_g,
                        ]}
                    />

                    {/* 4 */}
                    <TabelaNutricional
                        titulos={[
                        "AG Linoleico (g)",
                        "AG Linolênico (g)",
                        "AG Trans Total (g)",
                        "Açúcar Total (g)",
                        ]}
                        descricoes={[
                        props.alimento.AG_Lino_leico_g,
                        props.alimento.AG_Linole_nico_g,
                        props.alimento.AG_Trans_total_g,
                        props.alimento.Acucar_total_g,
                        ]}
                    />

                    {/* 5 */}
                    <TabelaNutricional
                        titulos={[
                        "Açúcar de Adição (g)",
                        "Cálcio (mg)",
                        "Magnésio (mg)",
                        "Manganês (mg)",
                        ]}
                        descricoes={[
                        props.alimento.Acucar_de_adicacao_g,
                        props.alimento.Calcio_mg,
                        props.alimento.Mag_nesio_mg,
                        props.alimento.Man_ganes_mg,
                        ]}
                    />

                    {/* 6 */}
                    <TabelaNutricional
                        titulos={[
                        "Fósforo (mg)",
                        "Ferro (mg)",
                        "Sódio (mg)",
                        "Sódio de Adição (mg)",
                        ]}
                        descricoes={[
                        props.alimento.Fosforo_mg,
                        props.alimento.Ferro_mg,
                        props.alimento.Sodio_mg,
                        props.alimento.Sodio_de_adicao_mg,
                        ]}
                    />

                    {/* 7 */}
                    <TabelaNutricional
                        titulos={[
                        "Potássio (mg)",
                        "Cobre (mg)",
                        "Zinco (mg)",
                        "Selênio (mcg)",
                        ]}
                        descricoes={[
                        props.alimento.Potas_sio_mg,
                        props.alimento.Co_bre_mg,
                        props.alimento.Zinco_mg,
                        props.alimento.Sele_nio_mcg,
                        ]}
                    />

                    {/* 8 */}
                    <TabelaNutricional
                        titulos={[
                        "Retinol (mcg)",
                        "Vitamina A RAE (mcg)",
                        "Tiamina (mg)",
                        "Riboflavina (mg)",
                        ]}
                        descricoes={[
                        props.alimento.Reti_nol_mcg,
                        props.alimento.Vitami_na_A_RAE_mcg,
                        props.alimento.Tiami_na_mg,
                        props.alimento.Ribofla_vina_mg,
                        ]}
                    />

                    {/* 9 */}
                    <TabelaNutricional
                        titulos={[
                        "Niacina (mg)",
                        "Niacina NE (mg)",
                        "Piridoxina (mg)",
                        "Cobalamina (mcg)",
                        ]}
                        descricoes={[
                        props.alimento.Niaci_na_mg,
                        props.alimento.Niaci_na_NE_mg,
                        props.alimento.Pirido_xina_mg,
                        props.alimento.Coba_lami_na_mcg,
                        ]}
                    />

                    {/* 10 */}
                    <TabelaNutricional
                        titulos={[
                        "Folato DFE (mcg)",
                        "Vitamina D (mcg)",
                        "Vitamina E (mg)",
                        "Vitamina C (mg)",
                        ]}
                        descricoes={[
                        props.alimento.Folato_DFE_mcg,
                        props.alimento.Vitami_na_D_mcg,
                        props.alimento.Vitami_na_E_mg,
                        props.alimento.Vitami_na_C_mg,
                        ]}
                    />
                </div>
            </div>
        </div>
    )

}