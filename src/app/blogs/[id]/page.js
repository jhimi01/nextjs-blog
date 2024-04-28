import React from "react";
import img from "/public/images/img (4).jpg";
import Image from "next/image";
import user from "/public/user.png";

export default function SingleBlog() {
  return (
    <div className="text-center mt-14 w-[60%] mx-auto">
      <div className="flex items-center justify-center flex-col gap-3">
        <Image width={100} height={100} src={user} alt="user img" />
        <div className="font-semibold mb-5 text-[#222] text-2xl">
          <p>Alexandra Lee</p>
          <p className="text-[#888] text-xl">CEO And Founder</p>
        </div>
      </div>
      <h1 className="capitalize font-semibold text-5xl ">
        Your most unhappy customers are your greatest source of learning.
      </h1>
      <p className="text-[#888] text-2xl my-4">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <Image
        placeholder="blur"
        className="rounded-md"
        src={img}
        alt="blog img"
      />
      <div className="text-[#888] text-2xl my-4 text-justify space-y-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          maxime voluptatum a accusamus dolor enim officia eligendi, porro
          labore ducimus saepe dolorem optio dolorum assumenda soluta explicabo
          recusandae delectus atque tempore aut nobis.
        </p>
        <p>
          Ullam placeat accusantium esse perspiciatis ipsam suscipit qui
          voluptatibus, illo quos sint dolores voluptatum incidunt iste,
          consectetur, iure doloremque tenetur labore in ex deleniti. In
          explicabo, autem nisi libero repellendus blanditiis dignissimos ad
          voluptatum ipsum hic itaque totam aliquid incidunt aliquam, rerum illo
          vel aspernatur? Cumque porro vel, commodi perspiciatis impedit
          similique? Nulla facilis, pariatur atque obcaecati deserunt totam,
          maiores recusandae ut ipsum dolore velit amet nostrum.
        </p>
        <blockquote className="italic font-serif border-l-2 border-black text-xl pl-16">
          <p>
            {
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eaque commodi a necessitatibus adipisci, eveniet, quidem nobis modi animi nostrum explicabo enim ipsam tenetur quia, temporibus eum nesciunt quasi saepe!"
            }
          </p>
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          impedit, quos vitae dolorum consequatur dolorem dolor quis nobis dicta
          aspernatur velit fugit id. Non amet nulla, officiis illo ut veniam?
        </p>
        <p>
          When she reached the first hills of the Italic Mountains, she had a
          last view back on the skyline of her hometown Bookmarksgrove, the
          headline of Alphabet Village and the subline of her own road, the Line
          Lane. Pityful a rethoric question ran over her cheek, then she
          continued her way.
        </p>
      </div>
    </div>
  );
}
