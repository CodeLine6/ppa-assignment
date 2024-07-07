"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { Button } from "./ui/button"

function Hero() {
    return (
        <section className='bg-[#F5F7FA] dark:bg-neutral-800 pb-5'>
            <Carousel
                className="container lg:max-w-[1300px]"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div class="text-gray-600 body-font dark:text-gray-400">
                            <div class="container mx-auto flex px-5 py-9 sm:py-24 md:flex-row flex-col items-center">
                                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h2 class="title-font text-4xl lg:text-6xl leading-tight mb-4 font-medium text-[#4D4D4D] dark:text-white">Lessons and insights
                                        <br /><span className="text-[#4CAF4F]">from 8 years</span>
                                    </h2>
                                    <p class="mb-4 sm:mb-8 text-base text-[#717171] dark:text-[#ababab]">Where to grow your business as a photographer: site or social media?</p>
                                    <div class="flex justify-center">
                                        <Button className="group transition" variant="primary" size="md">Register
                                        </Button>
                                    </div>
                                </div>
                                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid">
                                    <img class="object-cover object-center w-96 ml-auto" alt="hero" src={"assets/hero.png"} />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="text-gray-600 body-font dark:text-gray-400">
                            <div class="container mx-auto flex px-5 py-9 sm:py-24 md:flex-row flex-col items-center">
                                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h2 class="title-font text-4xl lg:text-6xl leading-tight mb-4 font-medium text-[#4D4D4D] dark:text-white">Lessons and insights
                                        <br /><span className="text-[#4CAF4F]">from 8 years</span>
                                    </h2>
                                    <p class="mb-4 sm:mb-8 text-base text-[#717171] dark:text-[#ababab]">Where to grow your business as a photographer: site or social media?</p>
                                    <div class="flex justify-center">
                                        <Button className="group transition" variant="primary" size="md">Register
                                        </Button>
                                    </div>
                                </div>
                                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid">
                                    <img class="object-cover object-center w-96 ml-auto" alt="hero" src={"assets/hero.png"} />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="text-gray-600 body-font dark:text-gray-400">
                            <div class="container mx-auto flex px-5 py-9 sm:py-24 md:flex-row flex-col items-center">
                                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h2 class="title-font text-4xl lg:text-6xl leading-tight mb-4 font-medium text-[#4D4D4D] dark:text-white">Lessons and insights
                                        <br /><span className="text-[#4CAF4F]">from 8 years</span>
                                    </h2>
                                    <p class="mb-4 sm:mb-8 text-base text-[#717171] dark:text-[#ababab]">Where to grow your business as a photographer: site or social media?</p>
                                    <div class="flex justify-center">
                                        <Button className="group transition" variant="primary" size="md">Register
                                        </Button>
                                    </div>
                                </div>
                                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid">
                                    <img className="object-cover object-center w-96 ml-auto" alt="hero" src={"assets/hero.png"} />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselDots />
            </Carousel>
        </section>
    )
}

export default Hero