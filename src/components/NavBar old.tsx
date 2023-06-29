import { NavBarCategories } from "../contents";

function NavBar() {
  return (
    <div className="w-full bg-green-300 dark:bg-pink-200 hidden sm:block">
      <div className="container mx-auto p-3">
        <div className="flex gap-4 justify-center flex-wrap">
          {NavBarCategories.map(({ title, queryParams }, key) => (
            // fix - include Link component to redirect to queryParams
            <p className="text-gray-700 font-bold text-lg" key={key}>
              {title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
