import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({
    className,
    id,
    children
}: {
    className?: string,
    id?: string,
    children: ReactNode
}) => {
    return (
        <div className={cn('mx-auto w-full max-w-screnn-xl px-2.5 md:px-20', className)} id={id}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper