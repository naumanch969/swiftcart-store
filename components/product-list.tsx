import { Product } from '@/types'
import React from 'react'
import NoResult from '@/components/ui/no-results'
import ProductCard from './ui/product-card'

const ProductList = ({ items, title }: { items: Product[], title: string }) => {


  return (
    <div className='space-y-4 ' >
      <h3 className="font-bold text-3xl ">{title}</h3>
      {
        items.length == 0
          ?
          <NoResult />
          :
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
              items.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))
            }
          </div>
      }
    </div>
  )
}

export default ProductList