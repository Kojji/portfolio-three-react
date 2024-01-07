import logo from "../assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../store/hooks";
import { toggleNavBar } from "../store/App/navBarStatus";
import "./SideBar.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function closeSideBar() {
    dispatch(toggleNavBar());
  }

  function redirectToId(index: number) {
    navigate(t(`HorizontalMenu.${index}.route`));
    closeSideBar();
    let routeSection = document.getElementById("route-section");
    routeSection?.scrollIntoView({ behavior: "smooth" });
  }

  const getMenuItems = () => {
    let content = [];
    for (let i = 0; i < 4; i++) {
      content.push(
        <a key={i}>
          <button
            id={t(`HorizontalMenu.${i}.id`)}
            className="text-gray-700 dark:text-pink-200 font-bold text-lg"
            onClick={() => redirectToId(i)}
          >
            <a>{t(`HorizontalMenu.${i}.value`)}</a>
          </button>
        </a>
      );
    }
    return content;
  };

  return (
    <div className="w-full bg-gray-700 px-4 py-2 flex flex-col z-40 side-bar">
      <div className="flex items-center w-full border-b-2 border-emerald-700 p-4">
        <button
          className="text-emerald-700 hover:text-emerald-900 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-emerald-500 mr-2 block"
          type="button"
          onClick={closeSideBar}
        >
          <FontAwesomeIcon icon={faBars} className="fa-2x" />
        </button>
        <img
          className="h-20 w-20 lg:h-24 lg:w-24 mx-auto"
          alt="store logo"
          src={logo}
        />
        <button
          className="text-emerald-700 hover:text-emerald-900 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-emerald-500 mr-2 block"
          type="button"
          onClick={closeSideBar}
        >
          <FontAwesomeIcon icon={faXmark} className="fa-2x" />
        </button>
      </div>
      <div className="pt-4 flex flex-col">{getMenuItems()}</div>
    </div>
  );
}

export default SideBar;
