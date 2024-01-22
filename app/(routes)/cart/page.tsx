"use client"

import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'
import React, { useEffect, useState } from 'react'
import CartItem from './components/cart-item'
import Summary from './components/summary'

const Cart = () => {

    const cart = useCart()
    console.log(cart)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="flex justify-center items-center">Loading...</div>

    return (
        <div className='bg-white' >
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8 '>
                    <h1 className="text-3xl font-bold text-black ">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7 ">
                            {cart.items.length == 0
                                ?
                                <p className="text-neutral-500">No items added to cart</p>
                                :
                                <ul>
                                    {
                                        cart.items.map((item, index) => (
                                            <CartItem data={item} key={index} />
                                        ))
                                    }
                                </ul>
                            }
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart