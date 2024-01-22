import { cn } from '@/lib/utils'
import { Image as TImage } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

const GalleryTab = ({ image }: { image: TImage }) => {
    return (
        <Tab className='relative flex aspect-square cursor-pointer items-center justify-normal rounded-md bg-white'>
            {
                ({ selected }) => (
                    <div className='' >
                        <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                            <Image
                                fill
                                src={image.url}
                                alt='Image'
                                className='object-cover object-center '
                            />
                        </span>
                        <span className={cn('absolute inset-0 rounded-md ring-2 ring-offset-2', selected ? 'ring-black' : 'ring-transparent')} />
                        {/* TO */}
                    </div>
                )
            }
        </Tab>
    )
}

export default GalleryTab