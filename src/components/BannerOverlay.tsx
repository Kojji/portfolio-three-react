import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { useAppSelector, useAppDispatch } from "../store/hooks";

import logo from "../assets/logo-white.png";
import "./BannerOverlay.css";

import { getWindowWidthState } from "../store/App/windowWidth";
import { getLanguageState, updateLanguage } from "../store/App/language";

function BannerOverlay() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const dispatch = useAppDispatch();

  const languageState = useAppSelector(getLanguageState);

  function editLanguage(newLanguage: string) {
    if (newLanguage !== languageState) {
      dispatch(updateLanguage(newLanguage));
      changeLanguage(newLanguage);
    }
  }

  const windowWidthState = useAppSelector(getWindowWidthState);

  return (
    <div id="animation-overlay-section" className="z-20">
      <div className="mx-auto p-10 container h-full flex flex-col justify-between">
        {/* <div className="mx-auto p-10 container bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 h-full flex flex-col"> */}
        {windowWidthState > 768 && (
          <div id="MDTopBar" className="flex justify-between">
            <div className="justify-self-start self-center md:w-32 md:h-32 w-24 h-24">
              <img src={logo} />
            </div>
            <div className="justify-self-end self-center gap-2 flex">
              {/* <div className="w-24 h-12 rounded-full g-2"> */}
              <button
                type="button"
                onClick={() => editLanguage("en")}
                className={
                  "rounded-full w-12 h-12 text-zinc-100 hover:opacity-100 font-bold bg-purple-600 " +
                  (languageState !== "en" ? "opacity-50" : "opacity-100")
                }
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => editLanguage("pt")}
                className={
                  "rounded-full w-12 h-12 text-zinc-100 hover:opacity-100 font-bold bg-purple-600 " +
                  (languageState !== "pt" ? "opacity-50" : "opacity-100")
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
        <div
          id="overlay-content"
          className="flex self-center max-w-screen-md rounded p-4"
        >
          <div className="flex flex-col">
            <div className="text-white">
              <div className="font-bold text-3xl">Fernando Koji Yamashiro</div>
              <div className="text-xl text-zinc-200">
                {t(`HomeBanner.ExtraProfession`)}
              </div>
              <div className="text-xl text-zinc-200">
                {t(`HomeBanner.Profession`)}
              </div>
            </div>
            <hr className="my-6" />
            {windowWidthState <= 768 && (
              <div className="flex flex-col items-center">
                <div className="inline-flex my-2">
                  <a
                    href={`https://wa.me/${t("HomeBanner.PhoneNumber")}`}
                    target="_blank"
                    className="mx-1 flex items-center w-12 h-12 rounded-full bg-purple-600 place-content-center text-white"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                  </a>
                  <a
                    href="mailto:fernandokojidev@gmail.com"
                    target="_blank"
                    className="mx-1 flex items-center w-12 h-12 rounded-full bg-purple-600 place-content-center text-white"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </a>
                  <a
                    href="https://github.com/Kojji"
                    target="_blank"
                    className="mx-1 flex items-center w-12 h-12 rounded-full bg-purple-600 place-content-center text-white"
                  >
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/nandokoji/"
                    target="_blank"
                    className="mx-1 flex items-center w-12 h-12 rounded-full bg-purple-600 place-content-center text-white"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fernandokojiyama/"
                    target="_blank"
                    className="mx-1 flex items-center w-12 h-12 rounded-full bg-purple-600 place-content-center text-white"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </a>
                  <a
                    href="https://codepen.io/kojji"
                    target="_blank"
                    className="mx-1 flex items-center w-12 h-12 rounded-full bg-purple-600 place-content-center text-white"
                  >
                    <FontAwesomeIcon icon={faCodepen} size="xl" />
                  </a>
                </div>
                <div className="flex flex-col space-y-2 mt-2">
                  <a href={t("HomeBanner.ViewResumeDev")} target="_blank">
                    <button
                      type="button"
                      className="flex items-center drop-shadow-xl w-80 h-10 rounded-md bg-purple-600 font-semibold text-md text-zinc-100 hover:bg-purple-700"
                    >
                      <FontAwesomeIcon icon={faDownload} className="px-3" />
                      <p className="xl:text-base text-sm">
                        {t("HomeBanner.CallToActionResumeDev")}
                      </p>
                    </button>
                  </a>
                  <a href={t("HomeBanner.ViewResumeBA")} target="_blank">
                    <button
                      type="button"
                      className="flex items-center drop-shadow-xl w-80 h-10 rounded-md bg-purple-600 font-semibold text-md text-zinc-100 hover:bg-purple-700"
                    >
                      <FontAwesomeIcon icon={faDownload} className="px-3" />
                      <p className="xl:text-base text-sm">
                        {t("HomeBanner.CallToActionResumeBA")}
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            )}
            {windowWidthState > 768 && (
              <div>
                <div className="flex justify-around my-2">
                  <a
                    href={`https://wa.me/${t("HomeBanner.PhoneNumber")}`}
                    target="_blank"
                  >
                    <button
                      className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-white shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                    </button>
                  </a>
                  <a href="mailto:fernandokojidev@gmail.com" target="_blank">
                    <button
                      className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-white shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </button>
                  </a>
                  <a href="https://github.com/Kojji" target="_blank">
                    <button
                      className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-white shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faGithub} size="xl" />
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/nandokoji/"
                    target="_blank"
                  >
                    <button
                      className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-white shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fernandokojiyama/"
                    target="_blank"
                  >
                    <button
                      className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-white shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </button>
                  </a>
                  <a href="https://codepen.io/kojji" target="_blank">
                    <button
                      className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-white shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faCodepen} size="xl" />
                    </button>
                  </a>
                </div>
                <div className="flex flex-col space-y-2 mt-2">
                  <a href={t("HomeBanner.ViewResumeDev")} target="_blank">
                    <button
                      type="button"
                      className="flex items-center drop-shadow-xl w-96 h-10 rounded-md bg-purple-600 font-semibold text-md text-zinc-100 hover:bg-purple-700"
                    >
                      <FontAwesomeIcon icon={faDownload} className="px-3" />
                      <p className="xl:text-base text-sm">
                        {t("HomeBanner.CallToActionResumeDev")}
                      </p>
                    </button>
                  </a>
                  <a href={t("HomeBanner.ViewResumeBA")} target="_blank">
                    <button
                      type="button"
                      className="flex items-center drop-shadow-xl w-96 h-10 rounded-md bg-purple-600 font-semibold text-md text-zinc-100 hover:bg-purple-700"
                    >
                      <FontAwesomeIcon icon={faDownload} className="px-3" />
                      <p className="xl:text-base text-sm">
                        {t("HomeBanner.CallToActionResumeBA")}
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerOverlay;
