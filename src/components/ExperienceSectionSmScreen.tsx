import { useTranslation } from "react-i18next";
import Accordion from "./ItemsAccordion";

function ExperienceSectionSmScreen() {
  const { t } = useTranslation();

  // number of items within InfoCards.Experience.Sections.${index}.items
  const sectionItemsInArray: number[] = [5, 6, 2];

  function getExperienceSectionItems(sectionIndex: number) {
    let content = [];
    for (let i = 0; i < sectionItemsInArray[sectionIndex]; i++) {
      content.push(
        <div key={String(sectionIndex) + String(i)}>
          <Accordion
            title={t(
              `InfoCards.Experience.Sections.${sectionIndex}.items.${i}.valueLabel`
            )}
            children={t(
              `InfoCards.Experience.Sections.${sectionIndex}.items.${i}.valueDescription`
            )}
            index={Number(String(sectionIndex) + String(i))}
          ></Accordion>
        </div>
      );
    }
    return content;
  }

  function getExperienceSections() {
    let content = [];
    for (let i = 0; i < 3; i++) {
      content.push(
        <div>
          <p className="flex justify-center text-3xl text-gray-700 font-bold mb-5">
            {t(`InfoCards.Experience.Sections.${i}.value`)}
          </p>
          <div>{getExperienceSectionItems(i)}</div>
        </div>
      );
    }
    return content;
  }

  return (
    <div className="w-full">
      <div className="mb-10">
        <div>{getExperienceSections()}</div>
      </div>
    </div>
  );
}

export default ExperienceSectionSmScreen;
