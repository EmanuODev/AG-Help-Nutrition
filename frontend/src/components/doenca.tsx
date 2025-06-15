import type { ComponentProps } from "react";
import { api } from "../api";

interface DoencaProps extends ComponentProps<'button'> {
    
    setFase: Function,
    setAlimentos: Function,
    index: number,
    url_image: string,
    nome: string,

}

export function Doenca ( props: DoencaProps ) {

    function carregarAlimentos () {

        api.get(`/food/lucas-cachorro/${props.index}`)
        .then(function (response) {
            props.setAlimentos(response.data.Cromossomo)
        })
        .catch(function (error) {
            console.error(error)
        })

    }

    return (
        <button onClick={() => {props.setFase(2); carregarAlimentos()}} className="h-64 w-56 bg-[#EEEEEE] flex flex-col justify-between items-center py-5 shadow-div rounded-xl cursor-pointer">
            <img src={props.url_image} alt={props.nome} className="w-32 h-32 mt-3"/>
            <h1 className="font-Montserrat font-bold text-gray-800 text-center">{props.nome}</h1>
        </button>
    )  

}