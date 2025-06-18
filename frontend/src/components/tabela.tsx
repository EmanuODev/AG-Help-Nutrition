import { useState, type ComponentProps } from "react";
import { TH } from "./th";
import { TD } from "./td";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Modal } from "./modal";


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

interface TabelaProps extends ComponentProps<'table'> {

    alimentos: AlimentoProps[],
    todos_alimentos: AlimentoProps[],
    setAlimentos: Function
}

export function Tabela ( props: TabelaProps ) {

    const [modal, setModal] = useState(false)

    const [index, setIndex] = useState(0)

    console.log(props.alimentos);

    return (
        
        <div className="w-[100rem] h-[44rem] overflow-scroll">

            <table className="w-full border-separate rounded-md shadow-div divide-y divide-[#000000]">

                <thead className="w-full mb-2">

                    <tr className="">
                        <TH className="bg-slate-500 text-white">Nº</TH>
                        <TH className="px-3">Substituição</TH>
                        <TH>Descrição do Alimento</TH>
                        <TH>Categoria</TH>
                        <TH>Descrição da Preparação</TH>
                        <TH>Energia kcal</TH>
                        <TH>Proteina (g)</TH>
                        <TH>Lipidios Totais (g)</TH>
                        <TH>Carboidrato (g)</TH>
                        <TH>Fibra Alimentar Total (g)</TH>
                        <TH>Colesterol (mg)</TH>
                        <TH>AG Saturados (g)</TH>
                        <TH>AG Mono (g)</TH>
                        <TH>AG Poli (g)</TH>
                        <TH>AG Linoleico (g)</TH>
                        <TH>AG Linolenico (g)</TH>
                        <TH>AG Trans Total (g)</TH>
                        <TH>Açucar Total (g)</TH>
                        <TH>Açucar de Adição (g)</TH>
                        <TH>Cálcio (mg)</TH>
                        <TH>Magnésio (mg)</TH>
                        <TH>Manganês (mg)</TH>
                        <TH>Fósforo (mg)</TH>
                        <TH>Ferro (mg)</TH>
                        <TH>Sódio (mg)</TH>
                        <TH>Sódio de Adição (mg)</TH>
                        <TH>Potássio (mg)</TH>
                        <TH>Cobre (mg)</TH>
                        <TH>Zinco (mg)</TH>
                        <TH>Selênio (mcg)</TH>
                        <TH>Retinol (mcg)</TH>
                        <TH>Vitamina A RAE (mcg)</TH>
                        <TH>Tiamina (mg)</TH>
                        <TH>Ribofla vina (mg)</TH>
                        <TH>Niacina (mg)</TH>
                        <TH>Niacina NE (mg)</TH>
                        <TH>Piridoxina (mg)</TH>
                        <TH>Cobalamina (mcg)</TH>
                        <TH>Folato DFE (mcg)</TH>
                        <TH>Vitamina D (mcg)</TH>
                        <TH>Vitamina E (mg)</TH>
                        <TH>Vitamina C (mg)</TH>
                    </tr>

                </thead>

                <tbody className="w-full">

                    {props.alimentos.map((alimento, index) => 

                        <tr className="">
                            <TD className="bg-slate-500 text-white">{index + 1}</TD>
                            <td className="px-1 w-full h-full border rounded-sm border-gray-300"><button onClick={() => {setIndex(index); setModal(true)}} className="w-full flex items-center justify-center"><FaArrowRightArrowLeft className="p-2 text-white bg-[#42A5F5] text-[2rem] rounded-lg cursor-pointer"/></button></td>
                            <TD>{alimento.descricacao_do_alimento}</TD>
                            <TD>{alimento.Categoria}</TD>
                            <TD>{alimento.descricao_da_preparacao}</TD>
                            <TD>{alimento.Energia_kcal != null ? alimento.Energia_kcal.toFixed(2).replace('.', ',') : alimento.Energia_kcal}</TD>
                            <TD>{alimento.Proteina_g != null ? alimento.Proteina_g.toFixed(2).replace('.', ',') : alimento.Proteina_g}</TD>
                            <TD>{alimento.Lipidios_totais_g != null ? alimento.Lipidios_totais_g.toFixed(2).replace('.', ',') : alimento.Lipidios_totais_g}</TD>
                            <TD>{alimento.Carboi_drato_g != null ? alimento.Carboi_drato_g.toFixed(2).replace('.', ',') : alimento.Carboi_drato_g}</TD>
                            <TD>{alimento.Fibra_alimentar_total_g != null ? alimento.Fibra_alimentar_total_g.toFixed(2).replace('.', ',') : alimento.Fibra_alimentar_total_g}</TD>
                            <TD>{alimento.Coles_terol_mg != null ? alimento.Coles_terol_mg.toFixed(2).replace('.', ',') : alimento.Coles_terol_mg}</TD>
                            <TD>{alimento.AG_Satura_dos_g != null ? alimento.AG_Satura_dos_g.toFixed(2).replace('.', ',') : alimento.AG_Satura_dos_g}</TD>
                            <TD>{alimento.AG_Mono_g != null ? alimento.AG_Mono_g.toFixed(2).replace('.', ',') : alimento.AG_Mono_g}</TD>
                            <TD>{alimento.AG_Poli_g != null ? alimento.AG_Poli_g.toFixed(2).replace('.', ',') : alimento.AG_Poli_g}</TD>
                            <TD>{alimento.AG_Lino_leico_g != null ? alimento.AG_Lino_leico_g.toFixed(2).replace('.', ',') : alimento.AG_Lino_leico_g}</TD>
                            <TD>{alimento.AG_Linole_nico_g != null ? alimento.AG_Linole_nico_g.toFixed(2).replace('.', ',') : alimento.AG_Linole_nico_g}</TD>
                            <TD>{alimento.AG_Trans_total_g != null ? alimento.AG_Trans_total_g.toFixed(2).replace('.', ',') : alimento.AG_Trans_total_g}</TD>
                            <TD>{alimento.Acucar_total_g != null ? alimento.Acucar_total_g.toFixed(2).replace('.', ',') : alimento.Acucar_total_g}</TD>
                            <TD>{alimento.Acucar_de_adicacao_g != null ? alimento.Acucar_de_adicacao_g.toFixed(2).replace('.', ',') : alimento.Acucar_de_adicacao_g}</TD>
                            <TD>{alimento.Calcio_mg != null ? alimento.Calcio_mg.toFixed(2).replace('.', ',') : alimento.Calcio_mg}</TD>
                            <TD>{alimento.Mag_nesio_mg != null ? alimento.Mag_nesio_mg.toFixed(2).replace('.', ',') : alimento.Mag_nesio_mg}</TD>
                            <TD>{alimento.Man_ganes_mg != null ? alimento.Man_ganes_mg.toFixed(2).replace('.', ',') : alimento.Man_ganes_mg}</TD>
                            <TD>{alimento.Fosforo_mg != null ? alimento.Fosforo_mg.toFixed(2).replace('.', ',') : alimento.Fosforo_mg}</TD>
                            <TD>{alimento.Ferro_mg != null ? alimento.Ferro_mg.toFixed(2).replace('.', ',') : alimento.Ferro_mg}</TD>
                            <TD>{alimento.Sodio_mg != null ? alimento.Sodio_mg.toFixed(2).replace('.', ',') : alimento.Sodio_mg}</TD>
                            <TD>{alimento.Sodio_de_adicao_mg != null ? alimento.Sodio_de_adicao_mg.toFixed(2).replace('.', ',') : alimento.Sodio_de_adicao_mg}</TD>
                            <TD>{alimento.Potas_sio_mg != null ? alimento.Potas_sio_mg.toFixed(2).replace('.', ',') : alimento.Potas_sio_mg}</TD>
                            <TD>{alimento.Co_bre_mg != null ? alimento.Co_bre_mg.toFixed(2).replace('.', ',') : alimento.Co_bre_mg}</TD>
                            <TD>{alimento.Zinco_mg != null ? alimento.Zinco_mg.toFixed(2).replace('.', ',') : alimento.Zinco_mg}</TD>
                            <TD>{alimento.Sele_nio_mcg != null ? alimento.Sele_nio_mcg.toFixed(2).replace('.', ',') : alimento.Sele_nio_mcg}</TD>
                            <TD>{alimento.Reti_nol_mcg != null ? alimento.Reti_nol_mcg.toFixed(2).replace('.', ',') : alimento.Reti_nol_mcg}</TD>
                            <TD>{alimento.Vitami_na_A_RAE_mcg != null ? alimento.Vitami_na_A_RAE_mcg.toFixed(2).replace('.', ',') : alimento.Vitami_na_A_RAE_mcg}</TD>
                            <TD>{alimento.Tiami_na_mg != null ? alimento.Tiami_na_mg.toFixed(2).replace('.', ',') : alimento.Tiami_na_mg}</TD>
                            <TD>{alimento.Ribofla_vina_mg != null ? alimento.Ribofla_vina_mg.toFixed(2).replace('.', ',') : alimento.Ribofla_vina_mg}</TD>
                            <TD>{alimento.Niaci_na_mg != null ? alimento.Niaci_na_mg.toFixed(2).replace('.', ',') : alimento.Niaci_na_mg}</TD>
                            <TD>{alimento.Niaci_na_NE_mg != null ? alimento.Niaci_na_NE_mg.toFixed(2).replace('.', ',') : alimento.Niaci_na_NE_mg}</TD>
                            <TD>{alimento.Pirido_xina_mg != null ? alimento.Pirido_xina_mg.toFixed(2).replace('.', ',') : alimento.Pirido_xina_mg}</TD>
                            <TD>{alimento.Coba_lami_na_mcg != null ? alimento.Coba_lami_na_mcg.toFixed(2).replace('.', ',') : alimento.Coba_lami_na_mcg}</TD>
                            <TD>{alimento.Folato_DFE_mcg != null ? alimento.Folato_DFE_mcg.toFixed(2).replace('.', ',') : alimento.Folato_DFE_mcg}</TD>
                            <TD>{alimento.Vitami_na_D_mcg != null ? alimento.Vitami_na_D_mcg.toFixed(2).replace('.', ',') : alimento.Vitami_na_D_mcg}</TD>
                            <TD>{alimento.Vitami_na_E_mg != null ? alimento.Vitami_na_E_mg.toFixed(2).replace('.', ',') : alimento.Vitami_na_E_mg}</TD>
                            <TD>{alimento.Vitami_na_C_mg != null ? alimento.Vitami_na_C_mg.toFixed(2).replace('.', ',') : alimento.Vitami_na_C_mg}</TD>

                        </tr>

                    )}

                </tbody>

            </table>

            {modal && <Modal todos_alimentos={props.todos_alimentos} index_alimento={index} alimentos={props.alimentos} setModal={setModal} setAlimentoSub={props.setAlimentos}/>}

        </div>
    )

}