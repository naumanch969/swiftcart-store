import { Product } from '@/types'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'


interface Props {
    items: Product[],
    addItem: (data: Product) => void,
    removeItem: (id: string) => void,
    removeAll: () => void
}

const useCart = create(
    persist<Props>(
        (set, get) => ({
            items: [],
            addItem: (data) => {
                const currentItems = get().items
                const existingItems = currentItems.find(item => item.id == data.id)
                if (existingItems) return toast("Item already in cart.")
                set({ items: [...get().items, data] })
                toast.success("Item added to cart")
            },
            removeItem: (id) => {
                set({ items: { ...get().items.filter(item => item.id != id) } })
            },
            removeAll: () => {
                set({ items: [] })
            },
        }),
        {
            name: 'cart-storage', storage: createJSONStorage(() => localStorage)
        }
    )
)
export default useCart