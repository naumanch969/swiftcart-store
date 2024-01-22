"use client"

import { Product } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import { Expand, ShoppingCart } from 'lucide-react'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'

const ProductCard = ({ product }: { product: Product }) => {

    const router = useRouter()
    const cart = useCart()
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${product?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation() // this overright the fact that there is onclick on the parent
        previewModal.onOpen(product)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation() // this overright the fact that there is onclick on the parent
        cart.addItem(product)
    }

    return (
        <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'  >
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative "  >
                <Image
                    src={product?.images?.[0]?.url}
                    alt='image'
                    fill
                    className='aspect-square object-cover rounded-md'
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className='text-gray-600' />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="">
                <p className="font-semibold text-lg ">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category?.name}</p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={product?.price} />
            </div>
        </div>
    )
}

export default ProductCard