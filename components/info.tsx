"use client"

import { Product } from '@/types'
import React from 'react'
import Currency from './ui/currency'
import Button from './ui/button'
import { ShoppingCart } from 'lucide-react'

const Info = ({ data }: { data: Product }) => {
    return (
        <div className='' >
            <h1 className='text-3xl font-bold text-gray-500 ' >{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-500">
                    <Currency value={data.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6 ">
                <div className="flex items-center gap-x-4">
                    <h3 className='font-semibold text-black' >Size:</h3>
                    <div className="">{data?.size?.name}</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className='font-semibold text-black' >Color:</h3>
                    <div className="w-6 h-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className='flex items-center gap-x-2'>
                    Add To Cart <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Info