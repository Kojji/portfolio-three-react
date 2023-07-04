import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { toggleNavBar } from "../store/App/navBarStatus";
import { useAppDispatch } from "../store/hooks";

function FixedSmScreenButtons() {
  const dispatch = useAppDispatch();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function openSideBar() {
    dispatch(toggleNavBar());
  }

  return (
    <div>
      <div className="fixed z-30 top-12 left-8">
        <button
          className="text-emerald-700 hover:text-emerald-900 dark:text-pink-500 dark:hover:text-pink-700 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-emerald-500 dark:focus:outline-pink-500 mr-2 block"
          type="button"
          onClick={openSideBar}
        >
          <FontAwesomeIcon icon={faBars} className="fa-2x" />
        </button>
      </div>
      <div className="fixed z-30 bottom-10 right-10">
        <button
          className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} className="fa-2x" />
        </button>
      </div>
    </div>
  );
}

export default FixedSmScreenButtons;