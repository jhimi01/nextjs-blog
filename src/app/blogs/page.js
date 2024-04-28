import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '/public/user.png';

export default function Blogs() {

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

  return (
    <div className='custom-width my-20'>
      <div className="grid grid-cols-3 gap-8">
        {travelblog.map((blogData) => (
         <Link key={blogData.id} href={`/blogs/${blogData.id}`}><div className="bg-white rounded-lg overflow-hidden shadow-lg">
         <div className="relative h-64">
           <Image
             src={blogData.img}
             layout="fill"
             objectFit="cover"
             alt={blogData.title}
           />
         </div>
         <div className="p-4">
           <h5 className="font-semibold text-[#222] text-lg">
             {blogData?.contentType}{" "}
             <span className="text-[#999]">- {blogData.date}</span>
           </h5>
           <h2 className="text-3xl font-bold mb-2 text-[#222]">
             {blogData.title}
           </h2>
           <p className="mb-2 text-[#888] text-xl">
             {blogData.content.slice(0, 90)}...
           </p>
           <div className="flex items-center gap-3">
             <Image
               width={40}
               height={40}
               src={user}
               alt="user img"
             />
             <div className="font-semibold text-[#222] text-lg">
               <p>{blogData.author}</p>
               <p className="text-[#888] text-sm">CEO And Founder</p>
             </div>
           </div>
         </div>
       </div></Link>
        ))}
      </div>
    </div>
  )
}
