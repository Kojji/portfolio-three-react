import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { toggleNavBar } from "../store/App/navBarStatus";
import logo from "../assets/logo-white.png";
import "./BannerOverlay.css";

import { getWindowWidthState } from "../store/App/windowWidth";

function BannerOverlay() {
  const dispatch = useAppDispatch();
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  function editLanguage(newLanguage: string) {
    if (newLanguage !== currentLanguage) {
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage);
    }
  }

  function openSideBar() {
    dispatch(toggleNavBar());
  }

  const windowWidthState = useAppSelector(getWindowWidthState);

  return (
    <div id="animation-overlay-section" className="z-20">
      <div className="mx-auto p-10 container bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 h-full flex flex-col">
        {windowWidthState > 768 && (
          <div id="MDTopBar" className="flex justify-between">
            <div className="justify-self-start self-center md:w-24 md:h-24 w-16 h-16">
              <img src={logo} />
            </div>
            <div className="justify-self-end self-center">
              <div className="w-24 h-12 rounded-full bg-black">
                <button
                  type="button"
                  onClick={() => editLanguage("en")}
                  className="rounded-full w-12 h-12 text-zinc-100 bg-amber-600 hover:bg-amber-700 font-bold"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => editLanguage("pt")}
                  className="rounded-full w-12 h-12 text-zinc-100 bg-amber-600 hover:bg-amber-700 font-bold"
                >
                  PT
                </button>
              </div>
            </div>
          </div>
        )}
        {windowWidthState <= 768 && (
          <div id="SMTopBar" className="flex justify-between">
            <button
              className="text-emerald-700 hover:text-emerald-900 dark:text-pink-500 dark:hover:text-pink-700 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-emerald-500 dark:focus:outline-pink-500 mr-2 block"
              type="button"
              onClick={openSideBar}
            >
              <FontAwesomeIcon icon={faBars} className="fa-2x" />
            </button>
            <div className="justify-self-start self-center md:w-24 md:h-24 w-16 h-16">
              <img src={logo} />
            </div>
          </div>
        )}
        <div className="flex-1 flex flex-col justify-end">
          {/* <div className="grid grid-cols-5 grid-flow-col">
            <div className="col-span-2">
              <div className="h-full w-full flex flex-col justify-center items-end">
                <div className="w-fit h-min"> */}
          <div className="inline-flex mb-2">
            <a
              href={`https://wa.me/${t("HomeBanner.PhoneNumber")}`}
              target="_blank"
            >
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </button>
            </a>
            <a href="mailto:fernandokojidev@gmail.com" target="_blank">
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </button>
            </a>
            <a href="https://github.com/Kojji" target="_blank">
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </a>
            <a href="https://www.instagram.com/nandokoji/" target="_blank">
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/fernandokojiyama/"
              target="_blank"
            >
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </button>
            </a>
            <a href="https://codepen.io/kojji" target="_blank">
              <button
                className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon icon={faCodepen} size="lg" />
              </button>
            </a>
          </div>
          {/* </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BannerOverlay;
