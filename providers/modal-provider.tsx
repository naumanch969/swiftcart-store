"use client"

import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            <PreviewModal />
        </>
    )
}

export default ModalProvider