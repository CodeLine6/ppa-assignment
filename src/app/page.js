import Clients from "@/components/sections/Clients";
import Fold3 from "@/components/sections/Fold3";
import Fold5 from "@/components/sections/Fold5";
import Hero from "@/components/sections/Hero";
import Prefooter from "@/components/sections/Prefooter";
import RecentBlogs from "@/components/sections/RecentBlogs";
import Statistics from "@/components/sections/statistics";
import SuitableFor from "@/components/sections/SuitableFor";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
  <>
    <Hero />
    <Clients />
    <SuitableFor />
    <Fold3/>
    <Statistics/>
    <Fold5/>
    <Testimonial />
    <RecentBlogs />
    <Prefooter/>
  </>
  );
}
