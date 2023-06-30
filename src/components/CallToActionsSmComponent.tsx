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

function CallToActionsSmComponent() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="w-full h-min p-5 flex flex-col items-center">
        <div className="inline-flex my-2">
          <a
            href={`https://wa.me/${t("HomeBanner.PhoneNumber")}`}
            target="_blank"
            className="mx-1 flex items-center w-12 h-12 rounded-full bg-amber-600 place-content-center text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </a>
          <a
            href="https://github.com/Kojji"
            target="_blank"
            className="mx-1 flex items-center w-12 h-12 rounded-full bg-amber-600 place-content-center text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.instagram.com/nandokoji/"
            target="_blank"
            className="mx-1 flex items-center w-12 h-12 rounded-full bg-amber-600 place-content-center text-white"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/fernandokojiyama/"
            target="_blank"
            className="mx-1 flex items-center w-12 h-12 rounded-full bg-amber-600 place-content-center text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://codepen.io/kojji"
            target="_blank"
            className="mx-1 flex items-center w-12 h-12 rounded-full bg-amber-600 place-content-center text-white"
          >
            <FontAwesomeIcon icon={faCodepen} size="xl" />
          </a>
        </div>
        <div className="inline-flex gap-4 mt-2">
          {/* <a href={t('HomeBanner.CallToActionResume') === 'Curriculo' ? Curriculo : Resume} target="_blank"> */}
          <button
            type="button"
            className="flex items-center drop-shadow-xl xl:w-36 w-32 xl:h-12 h-10  rounded-md bg-amber-600 font-semibold text-lg text-zinc-100 hover:bg-amber-700"
          >
            <FontAwesomeIcon icon={faDownload} className="px-3" />
            <p className="xl:text-base text-sm">
              {t("HomeBanner.CallToActionResume")}
            </p>
          </button>
          {/* </a> */}
          <a href="mailto:fernandokojidev@gmail.com" target="_blank">
            <button
              type="button"
              className="flex items-center drop-shadow-xl xl:w-36 w-32 xl:h-12 h-10  rounded-md bg-amber-600 font-semibold text-lg text-zinc-100 hover:bg-amber-700"
            >
              <FontAwesomeIcon icon={faEnvelope} className="px-3" />
              <p className="xl:text-base text-sm">
                {t("HomeBanner.CallToAction")}
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToActionsSmComponent;
