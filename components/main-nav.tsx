"use client"

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MainNav = ({ data }: { data: Category[] }) => {

    const pathname = usePathname()

    const routes = data?.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname == `/category/${route.id}`
    }))

    return (
        <div className='mx-6 flex items-center space-x-4 lg:space-x-4   ' >
            {
                routes?.map((route, index) => (
                    <Link
                        href={route.href}
                        key={index}
                        className={cn('text-sm font-medium transition-colors hover:text-black', route.active ? 'text-black' : 'text-muted-foreground')}
                    >
                        {route.label}
                    </Link>
                ))
            }
        </div>
    )
}

export default MainNav