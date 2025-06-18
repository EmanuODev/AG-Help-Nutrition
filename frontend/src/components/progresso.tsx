import type { ComponentProps } from "react";
import { Circulo } from "./circulo";
import { Linha } from "./linha";

interface ProgressoProps extends ComponentProps<'ul'> {
    
    info: {
        bolinha: boolean[],
        barrinha: boolean[]
    }

}

export function Progresso ( props: ProgressoProps ) {
    
    return (
        <ul className="flex items-center gap-x-3">
            <Circulo status={props.info.bolinha[0]}>1</Circulo>
            <Linha status={props.info.barrinha[0]}></Linha>
            <Circulo status={props.info.bolinha[1]}>2</Circulo>
            <Linha status={props.info.barrinha[1]}></Linha>
            <Circulo status={props.info.bolinha[2]}>3</Circulo>
            <Linha status={props.info.barrinha[2]}></Linha>
            <Circulo status={props.info.bolinha[3]}>4</Circulo>
        </ul>
    )
}