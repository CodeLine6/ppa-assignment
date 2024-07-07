import Image from 'next/image'
import React from 'react'

function SuitableFor() {
    return (
        <section className='pt-20 pb-5 bg-white dark:bg-neutral-950'>
            <div className='container grid gap-2 text-center'>
                <h2 className='text-4xl	leading-[44px] font-semibold text-[#4D4D4D] dark:text-white'>Manage your entire community <br className='hidden md:inline' />in a single system</h2>
                <p class="mb-4 sm:mb-8 text-base text-[#717171] dark:text-[#ababab]">Who is Nextcent suitable for?</p>
                <div class="flex gap-4 flex-col md:flex-row md:flex-wrap md:items-start md:justify-around">
                    <div class="p-4 md:w-96 md:h-72 flex flex-col text-center items-center shadow-custom transition-all">
                        <div class="dark:w-20 dark:h-20 inline-flex items-center justify-center rounded-full dark:bg-white mb-5 flex-shrink-0">
                            <Image src={"/assets/member-orgs.svg"} width={65} height={65} />
                        </div>
                        <div class="flex-grow">
                            <h3 class="mb-2 text-[28px] leading-[36px] font-bold text-[#4D4D4D] dark:text-white text-center">Membership <br />Organisations</h3>
                            <p class="mb-4 sm:mb-8 text-sm text-[#717171] dark:text-[#ababab] text-center">Our membership management <br />software provides full automation of <br />membership renewals and payments</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-96 md:h-72 flex flex-col text-center items-center shadow-custom transition-all">
                        <div class="dark:w-20 dark:h-20 inline-flex items-center justify-center rounded-full dark:bg-white mb-5 flex-shrink-0">
                            <Image src={"/assets/national-assoc.svg"} width={65} height={65} />
                        </div>
                        <div class="flex-grow">
                            <h3 class="mb-2 text-[28px] leading-[36px] font-bold text-[#4D4D4D] dark:text-white text-center">National <br />Associations</h3>
                            <p class="mb-4 sm:mb-8 text-sm text-[#717171] dark:text-[#ababab] text-center">Our membership management <br />software provides full automation of <br />membership renewals and <br />payments</p>

                        </div>
                    </div>
                    <div class="p-4 md:w-96 md:h-72 flex flex-col text-center items-center shadow-custom transition-all">
                        <div class="dark:w-20 dark:h-20 inline-flex items-center justify-center rounded-full dark:bg-white mb-5 flex-shrink-0">
                            <Image src={"/assets/clubs-and-groups.svg"} width={65} height={65} />
                        </div>
                        <div class="flex-grow">
                            <h3 class="mb-2 text-[28px] leading-[36px] font-bold text-[#4D4D4D] dark:text-white text-center">Clubs And<br />Groups</h3>
                            <p class="mb-4 sm:mb-8 text-sm text-[#717171] dark:text-[#ababab] text-center">Our membership management <br />software provides full automation of <br />membership renewals and payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuitableFor