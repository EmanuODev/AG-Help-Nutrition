import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface THRefeicaoProps extends ComponentProps<'th'> {

    children: string

}

export function THRefeicao ( props: THRefeicaoProps ) {

    return (
        <th className={twMerge("bg-[#A5D6C8] py-5 text-start pl-12 text-gray-700", props.className)}>{props.children}</th>
    )

}