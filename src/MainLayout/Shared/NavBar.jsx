import React, { useContext, useState } from "react";
import { FaStream } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="z-50 bg-white fixed w-full  h-[73px] shadow md:px-6 lg:px-16 xl:px-32 px-4  flex justify-between items-center">
      <h2 className="  text-2xl sm:text-3xl font-bold text-gray-900  ">
        <NavLink className="flex items-center" to="/"> <span><img className="w-10" src="https://media.licdn.com/dms/image/D560BAQHulJrXtTG7qQ/company-logo_200_200/0/1664475779505/skillforge_logo?e=2147483647&v=beta&t=1jPZ1jy2cuXJ3sa6lUMLu1ZmJW3lIooBPwPUnfs1wqQ" alt="" /></span>SkillForge</NavLink>
      </h2>

      <ul className="hidden lg:flex tracking-wide text-gray-700 text-base  space-x-6 items-center ">
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "text-blue-600 font-medium" : ""}`} to="/">Home</NavLink>
        </li>
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "text-blue-600 font-medium" : ""}`} to="/about">About Us</NavLink>
        </li>
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "bg-blue-600 font-medium" : ""}`} to="/tour">Course</NavLink>
        </li>
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "bg-blue-600 font-medium" : ""}`} to="/tour">Contact Us</NavLink>
        </li>

        <li>
          <div className="hidden lg:flex items-center mt-1">
            {user?.email ? (
              <div className="flex items-center">
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn bg-white ">
                    <div className="flex items-center gap-2">
                      <img
                        className=" w-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
                        alt=""
                      />
                      <p>{user.displayName}</p>
                    </div>
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>My Cart</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </details>
              </div>
            ) : (
              <Link
                to="/login"
                class=" bg-blue-600 hover:bg-blue-700 duration-500 ease-in-out transition-all   rounded px-4 py-2  text-white"
              >
                Login
              </Link>
            )}
          </div>
        </li>
      </ul>
      <div className=" lg:hidden flex  text-gray-800">
        <div className="">
          {!isOpen ? (
            <span onClick={() => setOpen(!isOpen)}>
              <FaStream />
            </span>
          ) : (
            <div
              onClick={() => setOpen(!isOpen)}
              className="  text-xl  py-7 flex justify-end items-center"
            >
              <RxCross2 className="z-10" />
            </div>
          )}

          <div
            className={`top-0 text-gray-800 bg-orange-50 right-0 absolute   w-[70vw] h-full  ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-500`}
          >
            <ul className="md:h-[100vh] bg-orange-50 h-[100vh] p-10 py-32 flex flex-col gap-6 justify-center items-center">
              {user && <p className=" font-bold text-lg">{user.displayName}</p>}
              <li className="pt-2 text-xl cursor-pointer hover:text-blue-600">
                Home
              </li>
              <li className="pt-2 text-xl cursor-pointer hover:text-blue-600">
                About Us
              </li>
              <li className="pt-2 text-xl cursor-pointer hover:text-blue-600">
                Course
              </li>
              <li className="pt-2 text-xl cursor-pointer hover:text-blue-600">
                Contact Us
              </li>

              <li>
                {user ? (
                  <button className=" border py-2 px-4 rounded border-blue-600" onClick={handleLogOut}>Logout</button>
                ) : (
                  <div className="  text-xl text-gray-800">
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;