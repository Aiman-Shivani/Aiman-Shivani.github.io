import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedinLogo, github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // return (
  //   <nav
  //     className={`${
  //       styles.paddingX
  //     } w-full flex items-center py-5 fixed top-0 z-20 ${
  //       scrolled ? "bg-primary" : "bg-transparent"
  //     }`}
  //   >
  //     <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
  //       <Link
  //         to="/"
  //         className="flex items-center gap-2"
  //         onClick={() => {
  //           setActive("");
  //           window.scrollTo(0, 0);
  //         }}
  //       >
  //         <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
  //         <p className="text-white text-[18px] font-bold cursor-pointer flex ">
  //           Aiman Shivani&nbsp;
  //           {/* <span className="sm:block hidden"> | JavaScript Mastery</span> */}
  //         </p>
  //       </Link>

  //       {/* <a
  //         href="https://linkedin.com/in/aiman-shivani/"
  //         target="_blank"
  //         className="mr-[49rem]"
  //       >
  //         <img
  //           src={linkedinLogo}
  //           alt="logo"
  //           className="w-7 h-7 object-contain"
  //         />
  //       </a> */}

  //       {/* <a
  //         href="https://linkedin.com/in/aiman-shivani/"
  //         target="_blank"
  //         // className="mr-[45rem]"
  //       >
  //         <img src={github} alt="logo" className="w-7 h-2 object-contain" />
  //       </a> */}

  //       <ul className="list-none hidden sm:flex flex-row gap-10">
  //         {navLinks.map((nav) => (
  //           <li
  //             key={nav.id}
  //             className={`${
  //               active === nav.title ? "text-white" : "text-secondary"
  //             } hover:text-white text-[18px] font-medium cursor-pointer`}
  //             onClick={() => setActive(nav.title)}
  //           >
  //             <a href={`#${nav.id}`}>{nav.title}</a>
  //           </li>
  //         ))}
  //       </ul>

  //       <div className="sm:hidden flex flex-1 justify-end items-center">
  //         <img
  //           src={toggle ? close : menu}
  //           alt="menu"
  //           className="w-[28px] h-[28px] object-contain"
  //           onClick={() => setToggle(!toggle)}
  //         />

  //         <div
  //           className={`${
  //             !toggle ? "hidden" : "flex"
  //           } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
  //         >
  //           <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
  //             {navLinks.map((nav) => (
  //               <li
  //                 key={nav.id}
  //                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
  //                   active === nav.title ? "text-white" : "text-secondary"
  //                 }`}
  //                 onClick={() => {
  //                   setToggle(!toggle);
  //                   setActive(nav.title);
  //                 }}
  //               >
  //                 <a href={`#${nav.id}`}>{nav.title}</a>
  //               </li>
  //             ))}
  //           </ul>
  //           <p>Aiman</p>
  //           <a
  //             href="https://linkedin.com/in/aiman-shivani/"
  //             target="_blank"
  //             // className="mr-[49rem]"
  //           >
  //             <img
  //               src={linkedinLogo}
  //               alt="logo"
  //               className="w-7 h-7 object-contain"
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Left section: Logo, Name, and LinkedIn logo */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Aiman Shivani | &nbsp;
            </p>
          </Link>

          <a
            href="https://linkedin.com/in/aiman-shivani/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn logo"
              className="w-7 h-7 object-contain"
            />
          </a>
          <a
            href="https://github.com/Aiman-Shivani"
            target="_blank"
            className="w-7 h-7 object-contain"
          >
            <img src={github} alt="logo" className="w-10 h-8 object-contain" />
          </a>
        </div>

        {/* Right section: Navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* LinkedIn logo in the mobile menu */}
            <a
              href="https://linkedin.com/in/aiman-shivani/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn logo"
                className="w-7 h-7 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
