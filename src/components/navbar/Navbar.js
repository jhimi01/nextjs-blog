"use client";
import { FaCloudMoon } from "react-icons/fa";
import Links from "./links/Links";
// import { useRouter } from "next/router";

export default function Navbar() {
//   const router = useRouter();
//   const handleInputClick = () => {
//     router.push("/blogs");
//   };

  return (
    <div
      className={`py-2 px-4`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
    >
      <div className="md:flex items-center justify-between custom-width gap-1 sm:gap-0">
        <div>
          <input
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            type="text"
            className="input-style"
            placeholder="search..."
            // onClick={handleInputClick}
          />
          {/* <button
            // onClick={toggleTheme}
            className={`text-3xl`}
          >
            <FaCloudMoon />
          </button> */}
        </div>
        <div>
            <nav>
              <Links />
              {/* <ul
                className={`flex flex-wrap md:gap-6 sm:gap-3 gap-1 text-xl`}
              >
                <li>
                  <Link
                    className={`link ${pathname === "/" ? "active" : ""}`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${pathname === "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`link ${pathname === "/blogs" ? "active" : ""}`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`link ${
                      pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={`link ${pathname === "/faq" ? "active" : ""}`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul> */}
            </nav>
        </div>
      </div>
    </div>
  );
}

{
  /* <a><BsFacebook /></a>
<a><AiOutlineTwitter /></a>
<a><BsYoutube /></a>
<a><AiFillInstagram /></a>
<a><IoLogoWhatsapp /></a> */
}
