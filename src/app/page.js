"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import img1 from "/public/images/img (1).jpg";
import img2 from "/public/images/img (2).jpg";
import img3 from "/public/images/img (3).jpg";
import img4 from "/public/images/img (4).jpg";
import img5 from "/public/images/img (5).jpg";
import img6 from "/public/images/img (6).jpg";
import img7 from "/public/images/img (7).jpg";
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

  const images = [img1, img2, img3, img4, img5, img6, img7];

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
