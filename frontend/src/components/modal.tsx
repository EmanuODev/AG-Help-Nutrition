import { useEffect, useState, type ComponentProps } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

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

interface ModalProps extends ComponentProps<'div'> {

    index_alimento: number,
    alimentos: AlimentoProps[],
    setModal: Function,
    setAlimentoSub: Function,
    todos_alimentos: AlimentoProps[]

}

export function Modal ( props: ModalProps ) {

    const [search, setSearch] = useState("")

    const [opcoes_alimentos, setOpcoesAlimentos] = useState<AlimentoProps[]>([])

    const [alimento, setAlimento] = useState<AlimentoProps>(props.alimentos[props.index_alimento]) 


    function filter ( search: string ) {

        setSearch(search)

        setOpcoesAlimentos(
            props.todos_alimentos.filter((alimento) => 
                (alimento.descricacao_do_alimento.trim().toLowerCase()).startsWith(search.trim().toLowerCase())
            )
        )

    }

    function substituir ( alimento_id: number ) {
        
        setAlimento(props.todos_alimentos[alimento_id - 1])
        setSearch("")

    }

    function submit () {

        props.setAlimentoSub(props.alimentos.map((alimento_map, index) => 
            index === props.index_alimento ? alimento : alimento_map
        ))

        props.setModal(false)

    }

    console.log(props.todos_alimentos)

    return(
        <div className="fixed z-30 inset-0 h-screen w-full bg-[#44444476] flex justify-center items-center">
            <div className="bg-white w-[70rem] h-[30rem] p-8 flex flex-col justify-between">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-[2.4rem] font-Outfit font-bold text-gray-800">Substituir Alimento</h1>
                    <button onClick={() => {props.setModal(false)}} className="bg-red-700 text-white p-3 rounded-lg cursor-pointer text-2xl"><IoClose /></button>
                </div>
                <div className="w-full flex items-center justify-between divide-x border bg-slate-500 text-white shadow-md py-3">
                    <h1 className="w-[15%] text-center px-2">{props.index_alimento + 1}</h1>
                    <h1 className="w-[35%] text-center px-2">{alimento.descricacao_do_alimento}</h1>
                    <h1 className="w-[25%] text-center px-2">{alimento.Categoria}</h1>
                    <h1 className="w-[25%] text-center px-2">{alimento.descricao_da_preparacao}</h1>
                </div>
                <label htmlFor="search" className="">
                    <h1 className="mb-3 ">Selecione o novo alimento</h1>
                    <div className="w-full relative flex flex-col items-center">
                        <div className="w-full flex items-center">
                            <MdOutlineSearch className="absolute ml-2 mb-1 z-30 text-2xl"/>
                            <input type="search" name="search" value={search} onChange={(e) => {filter(e.target.value); e.preventDefault()}} className="w-full rounded-sm shadow-div-sm relative py-2 pr-2 pl-10
                             outline-none mb-2" placeholder="Buscar"/>
                        </div>
                        <div className="w-full relative flex flex-col">
                            {(search.length > 0 && props.todos_alimentos.length > 0) && 
                                <ul className="absolute w-full h-[12rem] overflow-y-scroll px-5 py-5 ">
                                    {opcoes_alimentos.map((opcao, index) => 
                                        <motion.button whileHover={ {scale: 1.03} } onClick={() => {substituir(opcao.id)}} className="w-full border bg-slate-500 text-white shadow-md py-3 rounded-lg mb-1 cursor-pointer flex justify-center gap-x-10" data-toggle="tooltip" data-placement="top" title={opcao.descricao_da_preparacao}>
                                            <h1>{opcao.descricacao_do_alimento}</h1>
                                            <h1>|</h1>
                                            <h1>{opcao.descricao_da_preparacao}</h1>
                                        </motion.button>
                                    )}

                                </ul>
                            }
                        </div>
                    </div>
                </label>
                <div className="w-full flex justify-end">
                    <button onClick={() => submit()} className={twMerge("bg-green-600 hover:bg-green-700 focus:bg-green-500 transition ease-in-out px-12 py-3 rounded-lg text-white font-bold shadow-submit hover:shadow-lg cursor-pointer", props.className)}>
                        Substituir
                    </button>
                </div>
            </div>
        </div>
    )
}