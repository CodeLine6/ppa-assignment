import IconStat from './IconStat'

function Statistics() {

    return (
        <section class="bg-[#F5F7FA] dark:bg-neutral-800 body-font">
            <div class="container px-5 md:px-20 py-10 sm:py-24 mx-auto flex items-center md:flex-row flex-col">
                <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 className='text-4xl	leading-[44px] font-semibold text-[#4D4D4D] dark:text-white pb-2'>Helping a local <br className='hidden lg:inline' /><span className='text-[#4CAF4F]'>business reinvent itself</span></h2>
                </div>
                <div class="grid grid-cols-2 grid-rows-2 md:ml-auto md:w-[540px] md:mr-0 mx-auto gap-10">
                    <IconStat path="/assets/stats/1.png" numericValue="2245341" subtitle="Members" />
                    <IconStat path="/assets/stats/2.png" numericValue="46328" subtitle="Clubs" />
                    <IconStat path="/assets/stats/3.svg" numericValue="828867" subtitle="Event Bookings" />
                    <IconStat path="/assets/stats/4.svg" numericValue="1926346" subtitle="Payments" />
                </div>
            </div>
        </section>
    )
}

export default Statistics