import type { ComponentProps } from "react";

interface CirculoProps extends ComponentProps<'div'> {

    children: string

} 

export function Circulo ( props: CirculoProps ) {
    
    return (
        <div className="rounded-full border-2 border-blue-700 text-blue-700 font-bold px-3 py-1">
            {props.children}
        </div>
    )
}