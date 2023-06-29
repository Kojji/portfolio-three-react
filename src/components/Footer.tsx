import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
const year = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-purple-600 flex flex-col">
      <div className="mx-auto mt-4">
        <div className="inline-flex mb-2">
          <a href={t("FooterLinks.0")} target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </button>
          </a>
          <a href="" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </a>
          <a href="" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </a>
          <a href="" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </a>
          <a href="" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </a>
          <a href="" target="_blank">
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </button>
          </a>
        </div>
      </div>
      <div className="w-full text-center dark:text-white mb-2">
        {/* Copyright ©*/} {year} - made by Fernando Koji Yamashiro.
      </div>
    </div>
  );
}

export default Footer;
