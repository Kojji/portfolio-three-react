import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MenuMdComponent() {
  const { t } = useTranslation();
  let menuItems: string[] = [
    "about",
    "education",
    "experience",
    "skill",
    "animation",
  ];

  return (
    <div
      id="horizontal-menu"
      className="w-full inline-flex justify-center items-center md:my-5 my-5"
    >
      {menuItems.map((item, index) => (
        <Link
          to={t(`HorizontalMenu.${index}.route`)}
          className="hover:underline underline-offset-1 hover:text-blue-700 uppercase"
        >
          <button
            id={t(`HorizontalMenu.${index}.id`)}
            className="md:w-28 md:h-12 w-20 h-10 rounded-md md:mx-1 mx-px md:text-lg text-sm text-zinc-100 drop-shadow-xl font-semibold bg-amber-600 hover:bg-amber-700"
            // className={ selectedItem == item ? 'bg-amber-700' : null }
            // onClick={changeItem(item)}
          >
            <a>{t(`HorizontalMenu.${index}.value`)}</a>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default MenuMdComponent;
