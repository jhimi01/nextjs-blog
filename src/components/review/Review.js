import { Swiper, SwiperSlide } from "swiper/react";
import user from "/public/user.png";
import "./Review.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ReactStarsRating from "react-awesome-stars-rating";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Review() {
  const blogReviews = [
    {
      author: "Sarah Johnson",
      rating: 4.5,
      comment:
        "Great content and user-friendly interface. I found the articles very informative!",
      date: "2024-04-25",
    },
    {
      author: "Michael Smith",
      rating: 3.0,
      comment:
        "Decent blog, but could use more variety in topics. Navigation could be improved.",
      date: "2024-04-26",
    },
    {
      author: "Emily Chen",
      rating: 5.0,
      comment:
        "Love this blog! The writing style is engaging, and the topics are always interesting.",
      date: "2024-04-27",
    },
    {
      author: "David Lee",
      rating: 2.5,
      comment:
        "Not impressed. Articles are too basic and the site feels outdated.",
      date: "2024-04-27",
    },
  ];

  return (
    <div className="mt-20 review-section  py-10">
      <h1 className="text-6xl uppercase font-semibold text-[#333] text-center my-6">
        readers feedback
      </h1>
      <Swiper
        // slidesPerView={3}
        spaceBetween={15}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 15 }, // For small screens
          768: { slidesPerView: 2, spaceBetween: 20 }, // For medium screens
          1024: { slidesPerView: 3, spaceBetween: 30 }, // For large screens
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {blogReviews.map((blog, index) => (
          <SwiperSlide key={index} className="bg-slate-100 p-6">
            <div className="flex gap-2 items-cent bg-slate-400er">
              <Image src={user} height={40} width={40} alt="user img" />
              <div className="leading-4">
                <h3 className="text-2xl font-semibold text-[#333]">
                  {blog.author}
                </h3>
                <h4 className="text-[#888]">{blog.date}</h4>
              </div>
            </div>
            <div className="text-xl mt-5 font-[500] text-[#333]">
              <p> {blog.comment}</p>

              <ReactStarsRating
                isEdit={false}
                secondaryColor={"#835e2f"}
                starGap={5}
                size={20}
                className="flex mt-5"
                value={blog.rating}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
