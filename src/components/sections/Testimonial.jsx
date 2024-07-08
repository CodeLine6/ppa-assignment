import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'

function Testimonial() {
    return (
        <section className='bg-[#F5F7FA] dark:bg-neutral-800 body-font'>
            <div className='container px-5 py-10 mx-auto flex flex-col items-center sm:py-24 md:px-20 md:gap-20 md:items-stretch lg:items-center lg:flex-row'>
                <div class="sm:max-w-[70%] mb-10 md:mb-0 lg:w-80">
                    <img class="object-cover object-center rounded w-full" alt="hero" src="/assets/image 9.png" />
                </div>
                <div class="flex flex-col gap-4 items-stretch text-center md:text-left lg:pr-10 lg:w-3/5">
                    <p class="text-base font-medium text-[#717171] dark:text-[#ababab] sm:mb-0 ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h4 className='text-[#4CAF4F] text-xl font-semibold'>Tim Smith</h4>
                    <p class="text-base font-normal text-[#89939E] dark:text-[#ababab] -mt-2">British Dragon Boat Racing Association</p>
                    <div className='flex flex-wrap justify-between items-center content-center	'>
                        <img src="assets/clients/1.png" className='object-cover object-center h-12 dark:invert' />
                        <img src="assets/clients/2.png" className='object-cover object-center h-12 dark:invert' />
                        <img src="assets/clients/3.png" className='object-cover object-center h-12 dark:invert' />
                        <img src="assets/clients/4.png" className='object-cover object-center h-12 dark:invert' />
                        <img src="assets/clients/5.png" className='object-cover object-center h-12 dark:invert' />
                        <img src="assets/clients/6.png" className='object-cover object-center h-12 dark:invert' />
                        <Button variant="link" className="px-0 border-0" ><span>Meet all customers</span> <FaArrowRightLong className='ml-2 -mb-[2px]' /></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial