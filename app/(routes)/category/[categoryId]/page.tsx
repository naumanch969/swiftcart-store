import React from 'react'

import getCategory from '@/actions/get-category';
import getColors from '@/actions/get-colors';
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import NoResult from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

interface Props {
    params: { categoryId: string },
    searchParams: { colorId: string, sizeId: string }
}

export const revalidate = 0;

const CategoryPage = async ({ params: { categoryId }, searchParams: { colorId, sizeId } }: Props) => {

    const products = await getProducts({ categoryId, sizeId, colorId })
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(categoryId)

    return (
        <div className='bg-white ' >
            <Container>
                <Billboard data={category?.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 ">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey='sizeId'
                                name='Sizes'
                                data={sizes}
                            />
                            <Filter
                                valueKey='colorId'
                                name='Colors'
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {
                                products.length == 0
                                    ?
                                    <NoResult />
                                    :
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                                        {products.map((product, index) => (
                                            <ProductCard product={product} key={index} />
                                        ))}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default CategoryPage