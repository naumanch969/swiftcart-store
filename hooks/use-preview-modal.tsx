import { Product } from '@/types'
import { create } from 'zustand'


interface Props {
    isOpen: boolean,
    data?: Product,
    onOpen: (data: Product) => void,
    onClose: () => void
}

const usePreviewModal = create<Props>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: false }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal