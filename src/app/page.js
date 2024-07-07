import Clients from "@/components/Clients";
import Fold3 from "@/components/Fold3";
import Fold5 from "@/components/Fold5";
import Hero from "@/components/Hero";
import Prefooter from "@/components/Prefooter";
import RecentBlogs from "@/components/RecentBlogs";
import Statistics from "@/components/statistics";
import SuitableFor from "@/components/SuitableFor";
import Testimonial from "@/components/Testimonial";

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
