import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'

function RecentBlogs() {
    const blogs = [
        {
            title: "Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen",
            image: "https://picsum.photos/400"
        },
        {
            title: "What are your safeguarding <br/>responsibilities and how can <br/>you manage them?",
            image: "assets/blog.png"
        },
        {
            title: "Revamping the Membership <br/>Model with Triathlon <br/>Australia",
            image: "https://picsum.photos/390"
        }
    ]
    return (
        <section className="text-gray-600 body-font dark:bg-neutral-950">
            <div className="container px-5 py-9 sm:py-24 mx-auto mb">
                <div className="flex flex-col text-center w-full mb-8">
                    <h2 className='text-4xl	leading-[44px] font-semibold text-[#4D4D4D] dark:text-white pb-4 text-center'>Caring is the new marketing</h2>
                    <p className="text-base font-normal text-[#717171] dark:text-[#ababab] -mt-2">The Nexcent blog is the best place to read about the latest membership insights, <br className="hidden lg:inline" />trends and more. See who's joining the community, read about how our community <br className="hidden lg:inline" />is increasing their membership income and lot's more.​</p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-center md:flex-wrap -m-4 ">
                    {blogs.map(({ title, image }, index) => (
                        <div className="p-4 text-center" key={index}>
                            <img src={image} className='w-96 h-72 object-cover' alt="" />
                            <div className='px-3'>
                                <div className="flex rounded-lg bg-gray-100 p-8 flex-col shadow-large -mt-20 z-10 relative">
                                    <div className="mb-3">
                                        <h4 className="mb-2 text-xl font-semibold text-[#717171] " dangerouslySetInnerHTML={{ __html: title }}></h4>
                                    </div>
                                    <div >
                                        <Button variant="link" className="px-0 border-0" ><span>Read More</span> <FaArrowRightLong className='ml-2 -mb-[2px]' /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentBlogs