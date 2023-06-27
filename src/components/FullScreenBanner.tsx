import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { toggleNavBar } from "../store/App/navBarStatus";
import logo from "../assets/logo-white.png";

import "./FullScreenBanner.css";
import "css-doodle";

import { getWindowWidthState } from "../store/App/windowWidth";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": {};
    }
  }
}
// corrigir - edit square size according to screen size
let doodleRule: string = `:doodle {
    @grid:100rem / 100vmax;
    grid-gap: 1px;
  }
  animation-name: example;
  animation-duration: 7s;
  animation-delay: @rand(-30s);
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes example {
    0% {
      background: @pick(#9D4AC7, #C276E7, #D299EE, #DAB4EC, #DFC8E9);
    }
    50% {
      background: @pick(#9D4AC7, #C276E7, #D299EE, #DAB4EC, #DFC8E9);
    }
    100%{
      background: @pick(#9D4AC7, #C276E7, #D299EE, #DAB4EC, #DFC8E9);
    }`;

function FullScreenBanner() {
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
    <section
      id="animation-section"
      className="md:bg-contain bg-cover bg-center w-full relative"
    >
      <div className="absolute w-full h-full z-20">
        <div className="mx-auto p-10 container bg-gradient-to-r from-cyan-500 to-blue-500  opacity-75">
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
          <div>
            {t("HomeBanner.CallToAction")}
            {windowWidthState}
          </div>
        </div>
      </div>
      {/* <css-doodle>{doodleRule}</css-doodle> */}
    </section>
  );
}

export default FullScreenBanner;