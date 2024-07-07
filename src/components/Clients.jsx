import React from 'react'

function Clients() {
    return (
        <section className='pt-10 pb-5 bg-white dark:bg-neutral-950'>
            <div className='container grid gap-2 text-center'>

                <h2 className='text-4xl	leading-[44px] font-semibold text-[#4D4D4D] dark:text-white'>Our Clients</h2>
                <p class="mb-4 sm:mb-8 text-base text-[#717171] dark:text-[#ababab]">We have been working with some Fortune 500+ clients</p>
                <div className='logos grid grid-cols-3 md:grid-cols-4 md:grid-rows-auto  lg:grid-rows-1 lg:grid-cols-7 place-items-center dark:invert'>
                    <img src="assets/clients/1.png" className='object-cover object-center h-12' />
                    <img src="assets/clients/2.png" className='object-cover object-center h-12' />
                    <img src="assets/clients/3.png" className='object-cover object-center h-12' />
                    <img src="assets/clients/4.png" className='object-cover object-center h-12' />
                    <img src="assets/clients/5.png" className='object-cover object-center h-12 md:ml-[100%] lg:ml-0' />
                    <img src="assets/clients/6.png" className='object-cover object-center h-12 md:ml-[100%] lg:ml-0' />
                    <img src="assets/clients/3.png" className='object-cover object-center h-12 col-span-full md:ml-[100%] md:col-span-1 lg:ml-0' />
                </div>
            </div>
        </section>
    )
}

export default Clients