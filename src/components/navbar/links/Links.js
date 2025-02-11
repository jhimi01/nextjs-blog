import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Links() {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
  ];

  return (
    <ul className={`text-xl`}>
      <ul className="flex items-center gap-2 justify-center md:gap-5">
        {links.map((link, index) => (
         <li key={index}>
           <Link
            href={link.path}
            className={` ${pathname === `${link.path}` ? "active" : ""}`}
          >
            {link?.title}
          </Link>
         </li>
        ))}
      </ul>
    </ul>
  );
}
