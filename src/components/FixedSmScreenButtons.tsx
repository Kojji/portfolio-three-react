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
          className="bg-zinc-300 hover:bg-white text-purple-600 hover:text-purple-700 font-normal h-10 w-10 items-center justify-center align-center outline-none mr-2 block"
          type="button"
          onClick={openSideBar}
        >
          <FontAwesomeIcon icon={faBars} className="fa-2x" />
        </button>
      </div>
      <div className="fixed z-30 bottom-10 right-10">
        <button
          className="bg-zinc-200 text-purple-600 hover:text-purple-800 hover:bg-zinc-300 shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
