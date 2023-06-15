import logo from "../assets/logo360.png";
import { NavBarCategories } from "../contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../store/hooks";
import { toggleNavBar } from "../store/NavBar/navBarStatus";
// import "./SideBar.css";

function SideBar() {
  const dispatch = useAppDispatch();

  function closeSideBar() {
    dispatch(toggleNavBar());
  }

  return (
    <div className="absolute w-full bg-gray-200 dark:bg-gray-700 px-4 py-2 flex flex-col z-10 h-full">
      <div className="flex items-center w-full border-b-2 dark:border-pink-500 border-emerald-700 p-4">
        <button
          className="text-emerald-700 hover:text-emerald-900 dark:text-pink-500 dark:hover:text-pink-700 font-normal h-8 w-8 items-center justify-center align-center outline-none focus:outline-emerald-500 dark:focus:outline-pink-500  mr-2 block"
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
      </div>
      <div className="pt-4">
        {NavBarCategories.map(({ title, queryParams }, key) => (
          // fix - include Link component to redirect to queryParams
          <p
            className="text-gray-700 dark:text-pink-200 font-bold text-lg"
            key={key}
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
