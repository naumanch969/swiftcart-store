import { cn } from '@/lib/utils'
import React, { MouseEventHandler, ReactElement } from 'react'

const IconButton = ({ className, onClick, icon }: { className?: string, onClick?: MouseEventHandler<HTMLButtonElement> | undefined, icon: ReactElement }) => {
    return (
        <button
            onClick={onClick}
            className={
                cn(
                    'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition ',
                    className
                )}
        >
            {icon}
        </button>
    )
}

export default IconButton