import type { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TDRefeicaoProps extends ComponentProps<'td'> {

    children: string | number | ReactNode

}

export function TDRefeicao ( props: TDRefeicaoProps ) {

    return (
        <td className={twMerge("text-start pl-12 py-8 bg-gray-200 font-Outfit", props.className)}>{props.children === null ? '-' : props.children}</td>
    )

}