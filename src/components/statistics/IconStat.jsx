"use client"

import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
export default function IconStat({ path, numericValue, subtitle }) {
    const [count, setCount] = useState(0);
    const duration = 4000; // 4 seconds

    useEffect(() => {
        let startValue = 0;
        const interval = Math.floor(
            duration / (numericValue - 0));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(numberWithCommas(startValue));
            if (startValue >= numericValue) {
                clearInterval(counter);
            }
        }, interval);

        function numberWithCommas(n) {
            var parts = n.toString().split(".");
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        return () => {
            clearInterval(counter);
        };
    }, [numericValue]);
    return (

        <div className="flex items-center gap-4" >
            <img src={path} className="w-12" />
            <div className="grid gap-1">
                <h3 class="text-[28px] leading-[36px] font-bold text-[#4D4D4D] dark:text-white stat"><span >{count}</span></h3>
                <p class="text-base text-[#717171] dark:text-[#ababab]">{subtitle}</p>
            </div>
        </div>
    )
}
