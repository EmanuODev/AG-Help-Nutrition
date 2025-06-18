import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CirculoProps extends ComponentProps<'div'> {

    children: string,
    status: boolean

} 

export function Circulo ( props: CirculoProps ) {
    
    return (
        <div className={twMerge("rounded-full border-2 font-bold px-3 py-1 text-white", props.status ? "bg-blue-600 border-blue-600" : "border-slate-300 bg-slate-300")}>
            {props.children}
        </div>
    )
}