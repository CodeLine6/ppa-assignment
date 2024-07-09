
import Link from "next/link"
import { Logo } from "./Header"
import { InstagramLogoIcon } from "@radix-ui/react-icons"
import { DribbbleIcon } from "lucide-react"
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Input } from "./ui/input";
import { BsSend } from "react-icons/bs";

export default function Component() {
    return (
        <footer className="bg-[#263238] text-[#F5F7FA] p-6 md:p-12 md:py-16">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[1fr_0.5fr_0.5fr_1fr] gap-8">
                <div className="grid gap-8 sm:gap-4">
                    <Logo className="w-36" />
                    <div>
                        <p>Copyright © 2024 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className="social-media-icons flex gap-2">
                        <Link href="#" className="w-8 h-8 bg-[#3B464C] rounded-full grid place-items-center hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                            <InstagramLogoIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-[#3B464C] rounded-full grid place-items-center hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                            <DribbbleIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-[#3B464C] rounded-full grid place-items-center hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                            <FaTwitter className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-[#3B464C] rounded-full grid place-items-center hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                            <FaYoutube className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <div className="grid gap-4">
                    <h4 className="text-xl font-semibold text-white">Company</h4>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        About us
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Contact us
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Testimonials
                    </Link>
                </div>
                <div className="grid gap-4">
                    <h4 className="text-xl font-semibold text-white">Support</h4>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Help center
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Legal
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-gray-300 text-sm transition-colors" prefetch={false}>
                        Status
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-6">
                    <h4 className="text-xl font-semibold text-white">Stay up to date</h4>
                    <div className=" md:w-64 bg-[#515B60] justify-around gap-2 rounded-lg relative">
                        <Input type="email" placeholder="Your email address" className="bg-transparent ring-offset-transparent focus-visible:ring--0 outline-none border-0 placeholder:text-[#D9DBE1]" />
                        <BsSend className="absolute transition h-full right-2 top-0  hover:text-white cursor-pointer scale-75 hover:scale-100" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
