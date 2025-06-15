import type { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TDProps extends ComponentProps<'td'> {

    children: string | number | ReactNode

}

export function TD ( props: TDProps ) {

    return (
        <td className={twMerge("px-5 py-3 border rounded-sm border-gray-300 text-center font-Outfit", props.className)}>{props.children === null ? '-' : props.children}</td>
    )

}