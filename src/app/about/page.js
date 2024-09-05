// pages/about.js

import Image from "next/image";
import { BsChatRightHeartFill } from "react-icons/bs";
import { FaRegGrinHearts } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa6";

export default function About() {
  return (
    <div className="">
      {/* Header Section */}
      <section className="text-center bg-slate-100  ">
        <div className=" space-y-4 mx-auto w-11/12 md:w-1/2 py-10">
          <h2 className="text-3xl">Our Promise To You</h2>
          {/* <FaRegGrinHearts  /> */}
          <div className="flex justify-center">
            {/* <FiHeart className='text-2xl' /> */}
            <FaRegHeart className="text-2xl" />
          </div>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus qui sit dolores animi veniam eius perferendis minima
            cumque quia, nesciunt delectus atque neque praesentium cupiditate
            placeat?
          </p>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            nesciunt voluptatum pariatur ipsam accusamus repellat! Excepturi
            autem repudiandae debitis nulla!
          </p>
        </div>
      </section>

      <section className="custom-width py-14 text-center">
        <h2 className="text-3xl mb-8 capitalize">
          our customers are our roots
        </h2>
        <div className="md:flex items-center justify-between gap-10">
          <div className=" w-[90%] md:w-[50%] md:mb-0 mb-7  mx-auto">
            <Image
              src="/founder1.jpg"
              alt="founder"
              width={1000}
              height={100}
            />
          </div>
          <div className="w-[90%] md:w-[50%]  space-y-4 mx-auto">
            <p className="text-gray-700 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              necessitatibus optio accusantium quaerat doloribus voluptatem
              totam quia. Aspernatur soluta accusantium quos praesentium ipsa.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              eos! Dolor fugit quo facere saepe sint enim mollitia, vero
              voluptate?
            </p>
            <p className="text-gray-700 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              molestiae consequatur maiores itaque veniam expedita, inventore
              earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium modi facere at earum, dolorum soluta excepturi
              blanditiis aliquid et assumenda.
            </p>
            <p className="text-gray-700 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              pariatur eos ullam accusantium asperiores animi ex quia illum
              maiores itaque ratione nam officiis hic earum, cupiditate quas
              incidunt ducimus tenetur voluptatum natus sit dignissimos. Vero.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center my-10 py-10 bg-slate-100">
      <div className="custom-width md:flex-row flex-col-reverse flex items-center justify-between gap-10">
         
          <div className="w-[90%] md:w-[50%] space-y-4 mx-auto">
            <p className="text-gray-700 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              necessitatibus optio accusantium quaerat doloribus voluptatem
              totam quia. Aspernatur soluta accusantium quos praesentium ipsa.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              eos! Dolor fugit quo facere saepe sint enim mollitia, vero
              voluptate?
            </p>
            <p className="text-gray-700 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              molestiae consequatur maiores itaque veniam expedita, inventore
              earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium modi facere at earum, dolorum soluta excepturi
              blanditiis aliquid et assumenda.
            </p>
            <p className="text-gray-700 text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              pariatur eos ullam accusantium asperiores animi ex quia illum
              maiores itaque ratione nam officiis hic earum, cupiditate quas
              incidunt ducimus tenetur voluptatum natus sit dignissimos. Vero.
            </p>
          </div>
          <div className="w-[90%] md:w-[50%]  mx-auto">
            <Image
              src="/images/img (7).jpg"
              alt="founder"
              width={1000}
              height={100}
            />
          </div>
         
        </div>
      </section>
    </div>
  );
}
