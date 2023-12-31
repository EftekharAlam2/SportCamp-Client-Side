import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
// import useTheme from "../../Hooks/useTheme";
// import { BsMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 300px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  // const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          y: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          y: 0,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
            h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img src="https://i.ibb.co/P1P4vBP/logo.png" width={45} alt="" />
          <span className="text-xl whitespace-pre ms-2">SportCamp</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink
                to={"/"}
                className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              >
                <AiOutlineHome size={23} className="min-w-max" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/authentication"}
                className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              >
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/stroage"}
                className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              >
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/settings"}
                className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              >
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>

          <div className="text-center mt-3 ps-3  border-b py-3 border-slate-300 ">
            <NavLink
              to="/login"
              className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium bg-gray-100"
            >
              <IoMdLogIn size={23} className="min-w-max" />
              Login
            </NavLink>
          </div>
          {/* <div>
            {isDarkMode ? (
              <BsMoonStarsFill
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
                onClick={toggleTheme}
              ></BsMoonStarsFill>
            ) : (
              <BsFillBrightnessHighFill
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
                onClick={toggleTheme}
              ></BsFillBrightnessHighFill>
            )}
          </div> */}
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            quisquam doloremque mollitia beatae saepe, possimus sint placeat,
            ipsa id ipsam facilis ea corrupti maxime nulla omnis unde. Aliquid
            maxime cum, assumenda, laboriosam consequuntur minima, maiores
            quaerat dicta mollitia tenetur provident ratione corrupti
            praesentium recusandae doloribus aperiam at. Maiores, expedita
            explicabo? Magnam, ducimus minus officia adipisci error nisi sit
            distinctio odio.
          </div>
        </div>

        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: 0,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-4 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
