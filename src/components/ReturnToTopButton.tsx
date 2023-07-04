import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ReturnToTopButton() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="fixed z-10 bottom-10 right-10">
      <button
        className="bg-emerald-700 hover:bg-emerald-900 text-white dark:bg-zinc-200 dark:text-pink-600 dark:hover:text-pink-800 dark:hover:bg-zinc-300 shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faChevronUp} className="fa-2x" />
      </button>
    </div>
  );
}

export default ReturnToTopButton;
