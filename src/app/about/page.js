'use client'
import Lottie from "lottie-react";
import ballon from "/public/ballon.json";

export default function About() {
  return (
    <div className="text-[#333]">
      <div className="relative bg-[#7cadd87d] flex items-center justify-center h-[350px] text-center">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <div className="absolute infiniteAnimation w-[300px]">
        {/* <Lottie animationData={ballon} /> */}
        </div>
      </div>
      <div className="custom-width px-10 text-2xl flex flex-col items-center space-y-10 text-[#333] justify-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis voluptates voluptatum quis, placeat architecto rem sunt expedita obcaecati tempora pariatur officia voluptatibus, est saepe deserunt id voluptate nihil quod?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed pariatur quis ratione, neque magni distinctio voluptatibus, accusamus perferendis dolore provident excepturi tempore ullam quidem recusandae similique maxime minus? Odio numquam tempore praesentium in dicta laborum esse, nobis distinctio? Deleniti voluptatem inventore commodi! Quisquam illo blanditiis adipisci hic, harum tempora deserunt aspernatur debitis, aliquam dicta recusandae. Explicabo dicta suscipit dolorem eaque dolor totam adipisci fugiat enim? Ab, distinctio. Vel consequatur neque odio dolores commodi sequi facilis incidunt quisquam inventore perspiciatis, explicabo tenetur recusandae modi veniam fuga animi quis nobis reiciendis nesciunt? Veniam est voluptates nihil asperiores illo quisquam. Ab, corporis temporibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus, ab optio iure unde sequi vero pariatur quisquam temporibus neque nulla aut. Optio facere expedita neque ipsam qui dolor est tenetur quis, corporis a nihil voluptatem enim ducimus assumenda mollitia quasi cum voluptatum, nobis minus aperiam amet rerum doloremque ipsum. Nobis consequatur, obcaecati voluptatem suscipit totam nesciunt, recusandae exercitationem cum doloribus aspernatur, voluptas quas eum molestiae corrupti perspiciatis neque? Omnis dolorem veritatis id exercitationem temporibus ipsum consequuntur eos facere sapiente autem nemo itaque excepturi voluptatem, debitis aspernatur rem amet atque aperiam voluptates minus dolore impedit repellat! Error quidem, doloremque, quibusdam nostrum mollitia hic amet facere alias impedit nesciunt, voluptate necessitatibus. Possimus voluptatibus deleniti optio voluptates nam suscipit et nemo a totam, voluptatum repudiandae ea harum qui. Dolorem ipsum inventore nulla?</p>
      </div>
    </div>
  );
}
