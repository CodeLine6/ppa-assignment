"use client"
import React from 'react'
import { Button } from '../ui/button'

function ImageSection({ Image, Title, Description, cta }) {
    return (
        <section class="text-gray-600 body-font dark:bg-neutral-950">
            <div class="container mx-auto flex px-5 md:px-20 py-10 sm:py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={Image} />
                </div>
                <div class="lg:flex-grow lg:pr-10 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className='text-4xl	leading-[44px] font-semibold text-[#4D4D4D] dark:text-white pb-2'><Title /></h2>

                    <p class="pt-2 mb-4 sm:mb-8 text-sm text-[#717171] dark:text-[#ababab]">{Description}</p>
                    <div class="flex justify-center">
                        <Button className="group transition" variant="primary" size="md">{cta}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageSection