import {
  FooterLinks,
  AppName,
  AppSubTitle,
  BusinessABN,
  SocialMediaLinks,
} from "../contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebookSquare,
  faPinterestSquare,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="w-full bg-pink-200 dark:bg-teal-800 bottom-0">
      <div className="container mx-auto p-6">
        <Link to="/">
          <p className="text-2xl text-emerald-700 font-bold dark:text-gray-200">
            {AppName}
          </p>
        </Link>
        <p className="text-emerald-700 dark:text-cherryBlossom-light text-xl mb-5">
          {AppSubTitle}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {FooterLinks.map(({ links }, key) => (
            <div key={key} className="flex flex-col">
              {links.map(({ text, url }, key) => (
                <Link
                  className="text-gray-800 hover:text-gray-900 text-lg hover:font-semibold dark:text-pink-200 dark:hover:text-pink-300 "
                  to={url}
                  key={key}
                >
                  {text}
                </Link>
              ))}
            </div>
          ))}
          <div
            className={
              FooterLinks.length === 2
                ? "col-span-2 text-center flex flex-col mt-8 md:mt-0"
                : "col-span-1 text-center flex flex-col mt-8 md:mt-0"
            }
          >
            <div>
              {SocialMediaLinks.twitter !== "" && (
                <Link to={SocialMediaLinks.twitter} target="_blank">
                  <button
                    className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                </Link>
              )}
              {SocialMediaLinks.youtube !== "" && (
                <Link to={SocialMediaLinks.youtube} target="_blank">
                  <button
                    className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </button>
                </Link>
              )}
              {SocialMediaLinks.instagram !== "" && (
                <Link to={SocialMediaLinks.instagram} target="_blank">
                  <button
                    className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                </Link>
              )}
              {SocialMediaLinks.facebook !== "" && (
                <Link to={SocialMediaLinks.facebook} target="_blank">
                  <button
                    className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </button>
                </Link>
              )}
              {SocialMediaLinks.pinterest !== "" && (
                <Link to={SocialMediaLinks.pinterest} target="_blank">
                  <button
                    className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faPinterestSquare} />
                  </button>
                </Link>
              )}
              {SocialMediaLinks.tiktok !== "" && (
                <Link to={SocialMediaLinks.tiktok} target="_blank">
                  <button
                    className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </button>
                </Link>
              )}
            </div>
            <span className="mt-4 dark:text-white">
              ABN {" " + BusinessABN}
            </span>
            {/* enhance - maybe include accepted credit cards */}
          </div>
        </div>

        <div className="w-full text-center mt-8 dark:text-white">
          {/* Copyright ©*/} {year} - {AppName} by{" "}
          <a
            href="https://fernandokoji.dev"
            className="text-gray-800 hover:text-blue-800 dark:text-pink-200 dark:hover:text-pink-300"
          >
            Fernando Koji
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Footer;
