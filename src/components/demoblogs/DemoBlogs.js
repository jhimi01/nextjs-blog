import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";

export default function DemoBlogs() {
  const travelblog = [
    {
      id: 1,
      img: "/images/img (1).jpg",
      title: "Exploring the Streets of Tokyo",
      author: "Alexandra Lee",
      date: "April 1, 2024",
      content:
        "Alexandra recounts her recent trip to Tokyo, Japan, where she immersed herself in the city's vibrant culture and bustling streets. From sampling sushi at Tsukiji Market to strolling through the tranquil gardens of Meiji Shrine, she shares her favorite moments and travel tips.",
    },
    {
      id: 2,
      img: "/images/img (2).jpg",
      title: "Adventures in the Swiss Alps",
      author: "Michael Chen",
      date: "April 5, 2024",
      content:
        "Michael takes readers on a thrilling journey through the Swiss Alps, detailing his experiences hiking rugged trails, skiing down snow-capped slopes, and savoring delicious Swiss chocolate in picturesque mountain villages. He also provides recommendations for outdoor enthusiasts planning their own Alpine adventure.",
    },
    {
      id: 3,
      img: "/images/img (3).jpg",
      title: "Sunset Serenity in Santorini",
      author: "Sophia Patel",
      date: "April 10, 2024",
      content:
        "Sophia shares the magic of watching the sunset over the iconic white-washed buildings and azure waters of Santorini, Greece. She describes exploring charming villages, indulging in local cuisine, and relaxing on pristine beaches, offering insights for travelers seeking a tranquil island getaway.",
    },
    {
      id: 4,
      img: "/images/img (4).jpg",
      title: "Jungle Trekking in Costa Rica",
      author: "Diego Rodriguez",
      date: "April 15, 2024",
      content:
        "Diego recounts his thrilling adventures trekking through the lush rainforests of Costa Rica. From spotting exotic wildlife like sloths and toucans to zip-lining through the canopy and bathing in natural hot springs, he shares his exhilarating experiences and eco-friendly travel tips.",
    },
    {
      id: 5,
      img: "/images/img (5).jpg",
      title: "Cultural Immersion in Marrakech",
      author: "Fatima Khan",
      date: "April 20, 2024",
      content:
        "Fatima delves into the vibrant colors, aromatic spices, and rich history of Marrakech, Morocco. She recounts exploring bustling souks, admiring intricate Moorish architecture, and sipping mint tea in tranquil courtyards, offering readers a glimpse into the enchanting allure of this North African city.",
    },
    {
      id: 6,
      img: "/images/img (6).jpg",
      title: "Island Hopping in the Philippines",
      author: "Carlos Fernandez",
      date: "April 25, 2024",
      content:
        "Carlos shares his island-hopping adventure through the pristine beaches and crystal-clear waters of the Philippines. From swimming with whale sharks in Oslob to snorkeling in the vibrant coral reefs of Palawan, he highlights the diverse beauty and warm hospitality of this tropical paradise.",
    },
    {
      id: 7,
      img: "/images/img (7).jpg",
      title: "Magical Moments in Machu Picchu",
      author: "Elena Gomez",
      date: "April 30, 2024",
      content:
        "Elena reflects on her awe-inspiring journey to the ancient Incan citadel of Machu Picchu in Peru. She describes hiking along the legendary Inca Trail, marveling at the mist-shrouded ruins at sunrise, and connecting with the spiritual energy of this UNESCO World Heritage site, inspiring readers to embark on their own pilgrimage to this mystical wonder.",
    },
  ];
  const popular = [
    {
      id: 1,
      img: "/popular/img (1).jpg",
      title: "Exploring the Streets of Tokyo",
      author: "Alexandra Lee",
      date: "April 1, 2024",
      content:
        "Alexandra recounts her recent trip to Tokyo, Japan, where she immersed herself in the city's vibrant culture and bustling streets. From sampling sushi at Tsukiji Market to strolling through the tranquil gardens of Meiji Shrine, she shares her favorite moments and travel tips.",
    },
    {
      id: 2,
      img: "/popular/img (2).jpg",
      title: "Adventures in the Swiss Alps",
      author: "Michael Chen",
      date: "April 5, 2024",
      content:
        "Michael takes readers on a thrilling journey through the Swiss Alps, detailing his experiences hiking rugged trails, skiing down snow-capped slopes, and savoring delicious Swiss chocolate in picturesque mountain villages. He also provides recommendations for outdoor enthusiasts planning their own Alpine adventure.",
    },
    {
      id: 3,
      img: "/popular/img (3).jpg",
      title: "Sunset Serenity in Santorini",
      author: "Sophia Patel",
      date: "April 10, 2024",
      content:
        "Sophia shares the magic of watching the sunset over the iconic white-washed buildings and azure waters of Santorini, Greece. She describes exploring charming villages, indulging in local cuisine, and relaxing on pristine beaches, offering insights for travelers seeking a tranquil island getaway.",
    },
    {
      id: 4,
      img: "/popular/img (4).jpg",
      title: "Jungle Trekking in Costa Rica",
      author: "Diego Rodriguez",
      date: "April 15, 2024",
      content:
        "Diego recounts his thrilling adventures trekking through the lush rainforests of Costa Rica. From spotting exotic wildlife like sloths and toucans to zip-lining through the canopy and bathing in natural hot springs, he shares his exhilarating experiences and eco-friendly travel tips.",
    },
    {
      id: 5,
      img: "/popular/img (5).jpg",
      title: "Cultural Immersion in Marrakech",
      author: "Fatima Khan",
      date: "April 20, 2024",
      content:
        "Fatima delves into the vibrant colors, aromatic spices, and rich history of Marrakech, Morocco. She recounts exploring bustling souks, admiring intricate Moorish architecture, and sipping mint tea in tranquil courtyards, offering readers a glimpse into the enchanting allure of this North African city.",
    },
    {
      id: 6,
      img: "/popular/img (6).jpg",
      title: "Island Hopping in the Philippines",
      author: "Carlos Fernandez",
      date: "April 25, 2024",
      content:
        "Carlos shares his island-hopping adventure through the pristine beaches and crystal-clear waters of the Philippines. From swimming with whale sharks in Oslob to snorkeling in the vibrant coral reefs of Palawan, he highlights the diverse beauty and warm hospitality of this tropical paradise.",
    },
    {
      id: 7,
      img: "/popular/img (7).jpg",
      title: "Magical Moments in Machu Picchu",
      author: "Elena Gomez",
      date: "April 30, 2024",
      content:
        "Elena reflects on her awe-inspiring journey to the ancient Incan citadel of Machu Picchu in Peru. She describes hiking along the legendary Inca Trail, marveling at the mist-shrouded ruins at sunrise, and connecting with the spiritual energy of this UNESCO World Heritage site, inspiring readers to embark on their own pilgrimage to this mystical wonder.",
    },
  ];

  return (
    <div className="mt-20">
       <div className="mb-20">
       <h2 className="text-6xl capitalize font-semibold text-[#333] my-5">recent blogs</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {travelblog.map((blog, index) => (
          <SwiperSlide key={index}>
            <Link href={`/blogs`} key={blog.id}>
              <div className=" bg-white">
                <div className="">
                  <Image
                    src={blog.img}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="user img"
                  />
                </div>
                <div className="text-center p-4">
                  <h3 className="text-2xl font-semibold text-[#333]">
                    {blog.author}
                  </h3>
                  <h4 className="text-[#888]">{blog.date}</h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
       </div>

      <div >
      <h2 className="text-6xl capitalize font-semibold text-[#333] my-5">popular blogs</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        dir="rtl"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {popular.map((blog, index) => (
          <SwiperSlide key={index} className="">
            <Link href={`/blogs`} key={blog.id}>
              <div className=" bg-white">
                <div className="">
                  <Image
                    src={blog.img}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt="user img"
                  />
                </div>
                <div className="text-center p-4">
                  <h3 className="text-2xl font-semibold text-[#333]">
                    {blog.author}
                  </h3>
                  <h4 className="text-[#888]">{blog.date}</h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
