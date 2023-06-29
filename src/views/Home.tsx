import { useAppSelector } from "../store/hooks";
import { getFeaturedList } from "../store/Home/featuredList";
import { getDiscountList } from "../store/Home/discountList";
import { getRecentList } from "../store/Home/recentList";
import HomeReducedList from "../components/HomeReducedList old";

import { useTranslation } from "react-i18next";

function Home() {
  const {
    t,
    // i18n: { changeLanguage, language },
  } = useTranslation();

  const machineFeaturedList = useAppSelector(getFeaturedList);
  const machineDiscountList = useAppSelector(getDiscountList);
  const machineRecentList = useAppSelector(getRecentList);

  return (
    <div className="container bg-gray-200 rounded-lg border mx-auto my-2 md:my-4">
      <div className="w-full flex flex-col">
        <div className="mb-5 sm:mb-10">
          <div className="w-full h-48 rounded-t-lg bg-pink-200">
            {t("HorizontalMenu.0.title")}
            {t("HomeBanner.Profession")}
          </div>
        </div>
        <div className="mx-2 mb-5 sm:mb-10 border-t-2 dark:border-pink-500 border-emerald-700">
          <span className="px-2 uppercase font-bold text-lg">Most Recent</span>
          <HomeReducedList machines={machineRecentList} origin="recent" />
        </div>
        <div className="mx-2 mb-5 sm:mb-10 border-t-2 dark:border-pink-500 border-emerald-700">
          <span className="px-2 uppercase font-bold text-lg">Favorites</span>
          <HomeReducedList machines={machineFeaturedList} origin="favorites" />
        </div>
        <div className="mx-2 mb-5 sm:mb-10 border-t-2 dark:border-pink-500 border-emerald-700">
          <span className="px-2 uppercase font-bold text-lg">Discounts</span>
          <HomeReducedList machines={machineDiscountList} origin="discount" />
        </div>
        <div className="bg-green-300 p-4 rounded-b-lg flex justify-center uppercase">
          <p className="text-gray-700 font-bold text-lg">See All</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
