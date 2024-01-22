"use client"

import { formatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

const Currency = ({ value }: { value: string | number }) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className='font-semibold ' >
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency