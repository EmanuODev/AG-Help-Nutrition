import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LinhaProps extends ComponentProps<'div'> {

    status: boolean

} 

export function Linha ( props: LinhaProps) {
    
    return (
        <div className={twMerge("w-44 h-2 rounded", props.status ? "bg-blue-700" : "bg-slate-300")}>

        </div>
    )
}