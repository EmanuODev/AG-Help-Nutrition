import { useEffect, useState } from "react";
import { Doenca } from "../components/doenca";
import { Header } from "../components/header";
import { api } from "../api";
import { Progresso } from "../components/progresso";
import { motion } from "motion/react";
import { Tabela } from "../components/tabela";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { ProxAntFase } from "../components/prox_ant_fase";
import { Fase3 } from "../components/fase3";
import { Fase4 } from "../components/fase4";
import { Bounce, toast, ToastContainer } from "react-toastify";

type MacronutrientesProps = {

    "Energia_kcal": number,
    "Carboi_drato_g": number,
    "Proteina_g": number,
    "Gorduras_Saturadas": number,
    "Gorduras_Trans": number,
    "Gorduras_Totais": number,
    "Acucar_total_g": number

}

type DoencasProps = {

    id: number,
    nome: string,
    url_image: string

}

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

export function Home(){

    const [doencas, setDoencas] = useState<DoencasProps[]>([])
    const [alimentos, setAlimentos] = useState<AlimentoProps[]>([])
    const [todos_alimentos, setTodosAlimentos] = useState<AlimentoProps[]>([])
    const [refeicao, setRefeicao] = useState<AlimentoProps[]>([])
    const [macronutrientes, setMacronutrientes] = useState<MacronutrientesProps>({
        "Energia_kcal": 0,
		"Carboi_drato_g": 0,
		"Proteina_g": 0,
		"Gorduras_Saturadas": 0,
		"Gorduras_Trans": 0,
		"Gorduras_Totais": 0,
		"Acucar_total_g": 0,
    })

    const [status_fases, setStatusFases] = useState({
        bolinha: [true, false, false, false],
        barrinha: [false, false, false]
    })

    const [fase, setFase] = useState(1)

    useEffect(() => {

        const carregarAlimentos = () => {

            api.get('/food/foods')
            .then(function (resonse) {
                setTodosAlimentos(resonse.data.foods)
            })
            .catch(function (error) {
                console.error(error)
            })

        }

        carregarAlimentos()

    }, [])

    useEffect(() => {

        const carregarDoencas = () => {

            api.get('/doenca/mostrar-doencas')
            .then(function (response) {
                setDoencas(response.data.doencas)
            })
            .catch(function (error) {
                console.error(error);
            })

        };

        carregarDoencas();

    }, [])

    useEffect(() => {

        if (fase === 1) {

            setStatusFases({
                bolinha: [true, false, false, false],
                barrinha: [false, false, false]
            })
            
        }

        if (fase === 2) {

            setStatusFases({
                bolinha: [true, true, false, false],
                barrinha: [true, false, false]
            })

            toast.success("Doença escolhida com sucesso", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            
        }

        if (fase === 3) {

            setStatusFases({
                bolinha: [true, true, true, false],
                barrinha: [true, true, false]
            })

            toast.success("Recomendação de Alimentos", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            
        }

        if (fase === 4) {

            setStatusFases({
                bolinha: [true, true, true, true],
                barrinha: [true, true, true]
            })

            toast.success("Refeição sugerida com sucesso (temporária)", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            
        }
            
    }, [fase])

    return (
        <div className="min-h-screen flex flex-col bg-[#F1F8E9]">
            <Header></Header>
            <main className="h-full w-full flex flex-1 flex-col pt-12 items-center gap-12">
                <Progresso info={status_fases}></Progresso>
                {fase === 1 && 
                    <ul className="w-full grid grid-cols-4 justify-items-center gap-y-20 px-52 pt-12">
                        {doencas.map((doenca, index) =>
                            <motion.li initial={ {opacity: 0, scale: 0} } whileInView={ {opacity: 1, scale: 1} } whileHover={ {scale: 1.1} } key={doenca.id}>
                                <Doenca 
                                    setFase={setFase} 
                                    setAlimentos={setAlimentos}
                                    index={index + 1} 
                                    url_image={doenca.url_image} 
                                    nome={doenca.nome}/>
                            </motion.li>
                        )}

                    </ul>
                }
                {fase === 2 &&

                    <div className="w-full flex justify-between items-center px-12">

                        <ProxAntFase setFase={setFase} numFase={1}><GoArrowLeft className=""/></ProxAntFase>
                        <Tabela todos_alimentos={todos_alimentos} alimentos={alimentos} setAlimentos={setAlimentos}></Tabela>
                        <ProxAntFase setFase={setFase} numFase={3}><GoArrowRight className="text-white"/></ProxAntFase>
                        
                    </div>
                }
                {fase === 3 &&

                    <div className="w-full flex justify-center">
                        <Fase3 alimentos={alimentos} setRefeicao={setRefeicao} setMacronutrientes={setMacronutrientes} setFase={setFase}></Fase3>
                    </div>
                }

                {fase === 4 &&

                    <div className="w-full flex justify-center">
                        <Fase4 refeicao={refeicao} macronutrientes={macronutrientes}></Fase4>
                    </div>
                }

            </main>
            <ToastContainer />
        </div>
    )
}