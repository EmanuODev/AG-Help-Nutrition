import { Circulo } from "./circulo";
import { Linha } from "./linha";

export function Progresso () {
    
    return (
        <ul className="flex items-center gap-x-3">
            <Circulo>1</Circulo>
            <Linha></Linha>
            <Circulo>2</Circulo>
            <Linha></Linha>
            <Circulo>3</Circulo>
            <Linha></Linha>
            <Circulo>4</Circulo>
        </ul>
    )
}