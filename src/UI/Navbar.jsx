import { Link, NavLink } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { menuBtn, toggleMode } from '../redux/features/theme';
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";




function Navbar() {
  const products = useSelector((state)=>state.cart.products)

  const dispatch = useDispatch();

  const mode = useSelector((state)=>state.theme.mode)

  const menu = useSelector((state)=>state.theme.menu)


  return (
    <>
      <nav className=" sticky top-0 z-30 bg-secondary">
        <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-40 flex justify-between items-center py-2 md:py-5">
          {/* navbar first section */}
          <div className="hidden md:block poppins md:text-lg lg:text-xl font-semibold color-primary">
            <ul className="flex gap-10">
              {["Home", "Shop", "page", "Contact"].map((nav, index) => (
                <li key={index}>
                  <NavLink
                    to={nav === "Home" ? "/" : `/${nav}`}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-500" : ""
                      } hover:text-orange-500 transition duration-300 ease-in-out`
                    }
                  >
                    {nav}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* navbar middle section */}
          <div>
            <p className="stencil cursor-pointer  text-lg md:text-xl xl:text-2xl color-primary">
              <Link to="/">
                UrbanJatra<span className="text-orange-500">.</span>
              </Link>
            </p>
          </div>

          {/* navbar end section */}
          <div>
            <div className="flex justify-end gap-3  lg:gap-8 items-center">
              <Link
                to="/search"
                className="cursor-pointer color-primary text-lg md:text-xl xl:text-2xl"
              >
                <IoIosSearch />
              </Link>

              <Link
                to="/"
                className="cursor-pointer color-primary text-lg md:text-xl xl:text-2xl"
              >
                <FaShoppingCart className="inline-block" />
                {products.length ? (
                  <sup className="bg-red-500 rounded-full  text-white flex-row px-0.5 justify-center items-center text-xs xl:text-base">
                    {products.length}
                  </sup>
                ) : (
                  ""
                )}
              </Link>

              <Link
                to="/"
                className="cursor-pointer color-primary text-lg md:text-xl xl:text-2xl"
              >
                <CgProfile />
              </Link>

              <div className=" color-primary bg-primary rounded-full p-1">
                <Link>
                  {mode === "light" ? (
                    <MdOutlineLightMode
                      className={`text-lg md:text-xl xl:text-2xl bg-secondary rounded-full p-1 cursor-pointer `}
                      onClick={() => dispatch(toggleMode())}
                    />
                  ) : (
                    <MdOutlineModeNight
                      className="text-lg md:text-xl xl:text-2xl bg-secondary rounded-full p-1 cursor-pointer"
                      onClick={() => dispatch(toggleMode())}
                    />
                  )}
                </Link>
              </div>

              <div className={`z-30  md:hidden color-primary cursor-pointer`}>
                <Link>
                  {menu === "open-menu" ? (
                    <CiMenuBurger
                      onClick={() => dispatch(menuBtn())}
                      className="text-xl"
                    />
                  ) : (
                    <CiMenuFries
                      onClick={() => dispatch(menuBtn())}
                      className="text-xl"
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* menu bar */}

        <div
          className={`absolute bg-primary w-2/3 top-0  h-500  ${
            menu === "open-menu" ? "sliding-off" : "sliding-on"
          }`}
        >
          <ul className="flex flex-col items-center  mt-70 gap-5 poppins color-primary md:text-lg lg:text-xl">

            <li className="stencil cursor-pointer  text-lg md:text-xl xl:text-2xl color-primary border-b w-full text-center">
              <Link>
                UrbanJatra<span className="text-orange-500">.</span>
              </Link>
            </li>

            {["Home", "Shop", "Page", "Contact"].map((nav, index) => (
              <li key={index} className="w-full flex font-semibold">
                <NavLink
                  to={nav === "Home" ? "/" : `/${nav}`}
                  onClick={() => dispatch(menuBtn())}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-orange-500 text-white" : ""
                    } w-full text-center py-2`
                  }
                >
                  {nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar