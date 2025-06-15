import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface THProps extends ComponentProps<'th'> {

    children: string

}

export function TH ( props: THProps ) {

    return (
        <th className={twMerge("border border-gray-400 px-12 rounded-sm bg-[#5da460] text-white", props.className)}>{props.children}</th>
    )

}