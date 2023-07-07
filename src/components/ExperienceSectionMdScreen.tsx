import { useTranslation } from "react-i18next";

function ExperienceSectionMdScreen() {
  const { t } = useTranslation();

  const sectionItemsInArray: number[] = [5, 5, 2];

  function getTableItems(index: number) {
    let content = [];
    for (let i = 0; i < sectionItemsInArray[index]; i++) {
      let itemTitle: string = t(
        `InfoCards.Experience.Sections.${index}.items.${i}.title`
      );
      content.push(
        <a href={`#${itemTitle}`}>
          <button className="hover:bg-purple-400 hover:text-zinc-100 w-full flex items-center p-1 rounded-md font-semibold text-lg">
            {t(`InfoCards.Experience.Sections.${index}.items.${i}.valueMenu`)}
          </button>
        </a>
      );
    }
    return content;
  }

  function getItemTexts(index: number) {
    let content = [];
    for (let i = 0; i < sectionItemsInArray[index]; i++) {
      let itemTitle: string = t(
        `InfoCards.Experience.Sections.${index}.items.${i}.title`
      );
      content.push(
        <div className="my-10">
          <p id={itemTitle} className="font-bold text-xl">
            {t(`InfoCards.Experience.Sections.${index}.items.${i}.valueLabel`)}
          </p>
          <p
            className="text-xl"
            dangerouslySetInnerHTML={{
              __html: t(
                `InfoCards.Experience.Sections.${index}.items.${i}.valueDescription`
              ),
            }}
            v-html="$t()"
          ></p>
        </div>
      );
    }
    return content;
  }

  function getContentTable(index: number) {
    return (
      <div key={index} className="my-3">
        <div className="px-3 bg-gray-100 font-semibold xl:text-lg text-base rounded-t-md uppercase">
          {t(`InfoCards.Experience.Sections.${index}.value`)}
        </div>
        {getTableItems(index)}
      </div>
    );
  }

  function getContentTexts(index: number) {
    return (
      <div key={index}>
        <div className="px-3 bg-gray-100 font-semibold text-lg uppercase">
          {t(`InfoCards.Experience.Sections.${index}.value`)}
        </div>
        {getItemTexts(index)}
      </div>
    );
  }

  return (
    <div>
      <div className="px-10 flex flex-col">
        <h2 className="py-4 mx-auto font-bold lg:text-3xl text-2xl">
          {t("InfoCards.Experience.PageTitle")}
        </h2>
        <div className="inline-flex">
          <div className="px-3 py-4 lg:w-96 w-72 h-min bg-purple-100 rounded-md drop-shadow-lg">
            {sectionItemsInArray.map((_, index) => {
              return getContentTable(index);
            })}
          </div>
          <div className="w-full lg:px-10 px-5">
            {sectionItemsInArray.map((_, index) => {
              return getContentTexts(index);
            })}
            {/* <div v-for="(item, index) in experienceItems" :key="index">
              <div class="px-3 bg-gray-100 font-semibold text-lg uppercase">{{$t(`InfoCards.Experience.Sections[${index}].value`)}}</div>
              <div v-for="(subItem, subIndex) in item.items" :key="subIndex" class="my-10">
                <p :id="subItem" class="font-bold text-xl">{{$t(`InfoCards.Experience.Sections[${index}].items[${subIndex}].valueLabel`)}}</p>
                <p class="text-xl" v-html="$t(`InfoCards.Experience.Sections[${index}].items[${subIndex}].valueDescription`)"></p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSectionMdScreen;
