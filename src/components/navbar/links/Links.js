import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Links() {
    const pathname = usePathname();

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "FAQ",
            path: "/faq"
        }
    ]

  return (
    <ul className={`flex flex-wrap md:gap-6 sm:gap-3 gap-1 text-xl`}>

      <li>
        {
        links.map(((link, index)=>(
            <Link key={index} href={link.path} className={`ml-5 ${pathname === `${link.path}` ? "active" : ""}`} >{link?.title}</Link>
        )))
      }
      </li>
    </ul>
    
  )
}
