import { useTranslation } from "react-i18next";
import Accordion from "./ItemsAccordion";

function EducationSectionSmScreen() {
  const { t } = useTranslation();

  // number of items within InfoCards.Education.Sections.${index}.items
  const sectionItemsInArray: number[] = [
    Number(t(`InfoCards.Education.Sections.${0}.length`)),
    Number(t(`InfoCards.Education.Sections.${1}.length`)),
    Number(t(`InfoCards.Education.Sections.${2}.length`)),
  ];

  function getEducationSectionItems(sectionIndex: number) {
    let content = [];
    for (let i = 0; i < sectionItemsInArray[sectionIndex]; i++) {
      content.push(
        <div key={String(sectionIndex) + String(i)}>
          <Accordion
            title={t(
              `InfoCards.Education.Sections.${sectionIndex}.items.${i}.valueLabel`
            )}
            children={t(
              `InfoCards.Education.Sections.${sectionIndex}.items.${i}.valueDescription`
            )}
            index={Number(String(sectionIndex) + String(i))}
          ></Accordion>
        </div>
      );
    }
    return content;
  }

  function getEducationSections() {
    let content = [];
    for (let i = 0; i < 3; i++) {
      content.push(
        <div>
          <p className="flex justify-center text-3xl text-gray-700 font-bold mb-5">
            {t(`InfoCards.Education.Sections.${i}.value`)}
          </p>
          <div>{getEducationSectionItems(i)}</div>
        </div>
      );
    }
    return content;
  }

  return (
    <div className="w-full">
      <div className="mb-10">
        <div>{getEducationSections()}</div>
      </div>
    </div>
  );
}

export default EducationSectionSmScreen;
