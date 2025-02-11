"use client";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import ParallaxCompo from "../components/parallax";
import Review from "@/components/review/Review";
import Subscription from "@/components/subscription/Subscription";
import DemoBlogs from "@/components/demoblogs/DemoBlogs";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    AOS.init();
  }, []);
  const style = {
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#666",
  };

  return (
    <div className="custom-width ">
      <div className="border-b py-10 md:px-0 px-3 md:space-y-5">
        <p
          className="uppercase font-thin w-2/3 ml-auto "
          style={{ letterSpacing: "2px" }}
        >
          a <span className="border-b border-[#747373]">personal</span> blog
        </p>
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          className={`text-7xl md:text-[160px] font-semibold text-center`}
        >
          Ven<span style={style}>ture</span>r
        </h1>
        <p
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          className=" text-4xl font-extralight md:w-2/3 ml-auto text-justify md:text-start md:pl-32"
          style={{ letterSpacing: "3px" }}
        >
          I am a Blogger & Photographer Based in the world.
        </p>
      </div>
      <span className="bg-gradient-cusotom add-gradient"></span>

      <ParallaxCompo />

      <DemoBlogs />

      <Review />

      <Subscription />
    </div>
  );
}
