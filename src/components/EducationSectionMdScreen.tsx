import { useTranslation } from "react-i18next";

function EducationSectionMdScreen() {
  const { t } = useTranslation();

  const sectionItemsInArray: number[] = [
    Number(t(`InfoCards.Education.Sections.${0}.length`)),
    Number(t(`InfoCards.Education.Sections.${1}.length`)),
    Number(t(`InfoCards.Education.Sections.${2}.length`)),
  ];

  function getTableItems(index: number) {
    let content = [];
    for (let i = 0; i < sectionItemsInArray[index]; i++) {
      let itemTitle: string = t(
        `InfoCards.Education.Sections.${index}.items.${i}.title`
      );
      content.push(
        <a href={`#${itemTitle}`}>
          <button className="hover:bg-purple-400 hover:text-zinc-100 w-full flex text-start p-1 rounded-md font-semibold text-lg">
            {t(`InfoCards.Education.Sections.${index}.items.${i}.valueMenu`)}
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
        `InfoCards.Education.Sections.${index}.items.${i}.title`
      );
      content.push(
        <div className="my-10">
          <p id={itemTitle} className="font-bold text-xl">
            {t(`InfoCards.Education.Sections.${index}.items.${i}.valueLabel`)}
          </p>
          <p
            className="text-xl"
            dangerouslySetInnerHTML={{
              __html: t(
                `InfoCards.Education.Sections.${index}.items.${i}.valueDescription`
              ),
            }}
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
          {t(`InfoCards.Education.Sections.${index}.value`)}
        </div>
        {getTableItems(index)}
      </div>
    );
  }

  function getContentTexts(index: number) {
    return (
      <div key={index}>
        <div className="px-3 bg-gray-100 font-semibold text-lg uppercase">
          {t(`InfoCards.Education.Sections.${index}.value`)}
        </div>
        {getItemTexts(index)}
      </div>
    );
  }

  return (
    <div>
      <div className="px-2 flex flex-col">
        <h2 className="text-3xl text-center text-gray-700 font-bold mb-5">
          {t("InfoCards.Education.PageTitle")}
        </h2>
        <div className="inline-flex">
          <div className="px-3 py-4 w-96 h-min bg-purple-100 rounded-md drop-shadow-lg">
            {sectionItemsInArray.map((_, index) => {
              return getContentTable(index);
            })}
          </div>
          <div className="w-full px-5">
            {sectionItemsInArray.map((_, index) => {
              return getContentTexts(index);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSectionMdScreen;
