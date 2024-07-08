import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRightLong } from "react-icons/fa6";

function Prefooter() {
    return (
        <section className='bg-[#F5F7FA] flex flex-col justify-center items-center dark:bg-neutral-800 md:h-64 lg:h-80 py-8 text-center'>
            <h2 className='text-center text-2xl max-w-72 sm:text-3xl md:text-4xl md:max-w-96 lg:text-6xl leading-tight text-[#263238] dark:text-neutral-50 lg:max-w-2xl mx-auto'>Pellentesque suscipit fringilla libero eu.</h2>
            <Button className="mt-8 group transition" variant="primary" size="md">Get a Demo <FaArrowRightLong className='transition ml-2 group-hover:ml-4' />
            </Button>
        </section>
    )
}

export default Prefooter