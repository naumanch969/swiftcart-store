import { Billboard as TBillboard } from '@/types'
import React from 'react'

const Billboard = ({ data }: { data: TBillboard }) => {
    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ' >
            <div
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs ">
                        {data?.label}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Billboard