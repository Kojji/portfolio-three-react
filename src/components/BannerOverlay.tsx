import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { useAppSelector } from "../store/hooks";

import logo from "../assets/logo-white.png";
import "./BannerOverlay.css";

import { getWindowWidthState } from "../store/App/windowWidth";

function BannerOverlay() {
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

  const windowWidthState = useAppSelector(getWindowWidthState);

  return (
    <div id="animation-overlay-section" className="z-20">
      <div className="mx-auto p-10 container h-full flex flex-col">
        {/* <div className="mx-auto p-10 container bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 h-full flex flex-col"> */}
        {windowWidthState > 768 && (
          <div id="MDTopBar" className="flex justify-between">
            <div className="justify-self-start self-center md:w-24 md:h-24 w-16 h-16">
              <img src={logo} />
            </div>
            <div className="justify-self-end self-center gap-2 flex">
              {/* <div className="w-24 h-12 rounded-full g-2"> */}
              <button
                type="button"
                onClick={() => editLanguage("en")}
                className={
                  "rounded-full w-12 h-12 text-zinc-100 hover:opacity-100 font-bold bg-steelPink-600 " +
                  (currentLanguage !== "en" ? "opacity-50" : "opacity-100")
                }
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => editLanguage("pt")}
                className={
                  "rounded-full w-12 h-12 text-zinc-100 hover:opacity-100 font-bold bg-steelPink-600 " +
                  (currentLanguage !== "pt" ? "opacity-50" : "opacity-100")
                }
              >
                PT
              </button>
              {/* </div> */}
            </div>
          </div>
        )}
        {windowWidthState <= 768 && (
          <div id="SMTopBar" className="flex justify-end">
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
          <div className="text-white">
            <div>Fernando Koji Yamashiro</div>
            <div>{t(`HomeBanner.Profession`)}</div>
            <div>{t(`HomeBanner.ExtraProfession`)}</div>
            <div>{t(`HomeBanner.CallToActionResume`)}</div>
            <div>{t(`HomeBanner.CallToAction`)}</div>
          </div>
          <div className="inline-flex mb-2 gap-2">
            <a
              href={`https://wa.me/${t("HomeBanner.PhoneNumber")}`}
              target="_blank"
            >
              <button
                className="bg-zinc-200 text-steelPink-600 hover:text-steelPink-800 hover:bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </button>
            </a>
            <a href="mailto:fernandokojidev@gmail.com" target="_blank">
              <button
                className="bg-zinc-200 text-steelPink-600 hover:text-steelPink-800 hover:bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </button>
            </a>
            <a href="https://github.com/Kojji" target="_blank">
              <button
                className="bg-zinc-200 text-steelPink-600 hover:text-steelPink-800 hover:bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </a>
            <a href="https://www.instagram.com/nandokoji/" target="_blank">
              <button
                className="bg-zinc-200 text-steelPink-600 hover:text-steelPink-800 hover:bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none"
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
                className="bg-zinc-200 text-steelPink-600 hover:text-steelPink-800 hover:bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </button>
            </a>
            <a href="https://codepen.io/kojji" target="_blank">
              <button
                className="bg-zinc-200 text-steelPink-600 hover:text-steelPink-800 hover:bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none"
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
