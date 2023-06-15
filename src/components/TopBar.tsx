import logo from "../assets/logo360.png";
import { useState } from "react";
import { AppName } from "../contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../store/hooks";
import { toggleNavBar } from "../store/NavBar/navBarStatus";
import { Link } from "react-router-dom";

function TopBar() {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();

  function inputHandler(value: string) {
    var lowerCase = value.toLowerCase();
    setInputText(lowerCase);
  }

  function openSideBar() {
    dispatch(toggleNavBar());
  }

  function toggleCart() {}

  function toggleUserInfo() {}

  function performSearch() {
    console.log(inputText);
  }

  return (
    <div className="w-full bg-pink-100 dark:bg-teal-800">
      <div className="container mx-auto">
        <div className="px-4 md:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="text-emerald-700 hover:text-emerald-900 dark:text-pink-500 dark:hover:text-pink-700 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-emerald-500 dark:focus:outline-pink-500  mr-2 block sm:hidden"
              type="button"
              onClick={openSideBar}
            >
              <FontAwesomeIcon icon={faBars} className="fa-2x" />
            </button>
            <Link to="/">
              <img
                className="h-20 w-20 lg:h-24 lg:w-24"
                alt="store logo"
                src={logo}
              />
            </Link>
            <p className="text-3xl text-emerald-800 dark:text-gray-200 pl-1 hidden sm:block font-bold">
              {AppName}
            </p>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4 transition-all hover:w-80 w-56 hidden md:block">
              <input
                type="search"
                value={inputText}
                id="default-search"
                className="block p-4 pr-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none dark:bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-600 dark:focus:ring-pink-200 dark:focus:border-pink-400"
                placeholder="Search"
                onChange={(event) => inputHandler(event.target.value)}
              />
              {inputText !== "" && (
                <button
                  type="button"
                  className="text-white absolute right-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-900 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
                  onClick={performSearch}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              )}
            </div>
            <div>
              {/* fix - button functionality */}
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-10 w-10 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                onClick={toggleCart}
              >
                <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
              </button>
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-10 w-10 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                onClick={toggleUserInfo}
              >
                <FontAwesomeIcon icon={faUser} className="fa-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center block md:hidden pb-2 ">
          <div className="relative mx-10 w-full">
            <input
              type="search"
              value={inputText}
              id="default-search"
              className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none dark:bg-zinc-300 dark:border-gray-600 dark:placeholder-gray-600 dark:focus:ring-pink-200 dark:focus:border-pink-400 flex justify-center"
              placeholder="Search"
              onChange={(event) => inputHandler(event.target.value)}
            />
            {inputText !== "" && (
              <button
                type="button"
                className="text-white absolute bg-emerald-700 bottom-2 left-1.5 hover:bg-emerald-900 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-2 py-1 dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
                onClick={performSearch}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
