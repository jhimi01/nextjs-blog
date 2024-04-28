import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-[#3333332a] py-10 px-4 md:px-0 mt-5">
      <div className="custom-width">
        <div className="md:flex justify-between gap-5 my-4">
          <div className="md:flex-1 space-y-2">
            <h4 className="font-bold text-xl">About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              expedita nam aut nemo recusandae vero quisquam vitae tempore,
              culpa dolorum!
            </p>
            <div className="flex items-center gap-2">
              <h5 className="font-semibold">email:</h5>
              <p>abdf@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <h5 className="font-semibold">Phone:</h5>
              <p>+0880172345</p>
            </div>
          </div>
          <div className="md:flex-2 lg:px-10 md:px-3">
            <h3 className="text-xl font-bold">Quick Link</h3>
            <ul>
              <li>home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="md:flex-2  lg:px-10 md:px-3">
            <h3 className="text-xl font-bold">Category</h3>
            <ul>
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Bussiness</li>
              <li>Economy</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl md:flex-1 text-center">
            <h3 className="text-xl font-semibold text-black">
              weekly newsletter
            </h3>
            <p className="text-gray-600 mb-1">
              Get blog articles and offers via email!
            </p>
            <div className="relative">
              <p className="absolute top-7 right-5 text-gray-500 text-xl">
                <AiOutlineMail />
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="p-3 my-4 w-full bg-slate-200 rounded-xl"
              />
            </div>
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  w-full">
              subscribe
            </button>
          </div>
        </div>

        {/* bottom part */}
        <div className="flex justify-between items-center border-t-2 pt-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png" // Path to the image in the public folder
              alt="My Image"
              width={40} // Desired width
              height={40} // Desired height
            />
            <div>
              <h5 className="font-medium">Venturer</h5>
              <p>© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div>
            <ul className="flex gap-3 text-[#4593ec] underline">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
