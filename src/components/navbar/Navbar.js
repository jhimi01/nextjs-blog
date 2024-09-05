"use client";
import { FaCloudMoon } from "react-icons/fa";
import Links from "./links/Links";

export default function Navbar() {

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
          />
        
        </div>
        <div>
            <nav>
              <Links />
            </nav>
        </div>
      </div>
    </div>
  );
}

