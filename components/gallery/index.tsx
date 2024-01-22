"use client"

import { Tab } from '@headlessui/react'
import { Image as TImage } from '@/types'
import React from 'react'

import GalleryTab from '@/components/gallery/gallry-tab'
import Image from 'next/image'

const Gallery = ({ images }: { images: TImage[] }) => {
    return (
        <Tab.Group as='div' className='flex flex-col-reverse' >
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none ">
                <Tab.List className='grid grid-cols-4 gap-6'>
                    {
                        images.map((image, index) => (
                            <GalleryTab key={index} image={image} />
                        ))
                    }
                </Tab.List>
            </div>
            <Tab.Panels className='aspect-square w-full' >
                {
                    images.map((image, index) => (
                        <Tab.Panel key={index} >
                            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                                <Image
                                    src={image.url}
                                    alt='Image'
                                    fill
                                    className='object-cover object-center'
                                />
                            </div>
                        </Tab.Panel>
                    ))
                }
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery