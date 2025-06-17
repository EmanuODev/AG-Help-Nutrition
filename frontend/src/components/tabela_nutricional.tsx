import type { ComponentProps } from "react";

interface TabelaNutricionalProps extends ComponentProps<'div'> {

    titulos: string[],
    descricoes: (string | number) [],

}

export function TabelaNutricional( props: TabelaNutricionalProps ){
    

    return (
        <table className="w-full">
            <thead>
                {props.titulos.map((titulo) => 
                    <th className="w-[25%] py-2 text-start bg-[#A5D6C8] text-gray-700 pl-5">{titulo}</th>
                )}
            </thead>
            <tbody>
                {props.descricoes.map((descricao) => 
                    <td className="bg text-start bg-gray-200 font-Outfit pl-5 py-1">{descricao === null ? '-' : descricao}</td>
                )}
            </tbody>
        </table>
    )

}