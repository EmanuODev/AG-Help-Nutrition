import type { ComponentProps, ReactNode } from "react";

interface PAFase extends ComponentProps<'button'> {

    children: ReactNode,
    setFase: Function,
    numFase: number

}

export function ProxAntFase( props: PAFase ) {

    return(
        <button onClick={() => props.setFase(props.numFase)} className="p-2 text-white bg-[#263238] text-[2rem] rounded-2xl cursor-pointer">{props.children}</button>
    )

}