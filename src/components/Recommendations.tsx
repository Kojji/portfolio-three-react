import { useState } from "react";
import { useTranslation } from "react-i18next";

function Recommendations() {
  const { t } = useTranslation();

  const sectionItemsInArray: number = Number(
    t(`Recommendations.SectionLength`)
  );

  function getParagraphs(recommendationIndex: number) {
    const recommendationLength: number = Number(
      t(`Recommendations.Items.${recommendationIndex}.length`)
    );
    let content = [];
    for (let i = 0; i < recommendationLength; i++) {
      content.push(
        <div
          className="pb-2"
          key={i}
          dangerouslySetInnerHTML={{
            __html: t(
              `Recommendations.Items.${recommendationIndex}.content.${i}`
            ),
          }}
        ></div>
      );
    }
    return content;
  }

  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < sectionItemsInArray - 1) setIndex(index + 1);
  };

  return (
    <div id="recommendations" className="w-full">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border px-4 py-8 m-10 max-w-screen-md">
        <h2 className="text-3xl text-center text-gray-700 font-bold mb-5">
          {t("Recommendations.Title")}
        </h2>
        <div className="gap-2 flex justify-center mt-3">
          <button
            type="button"
            onClick={() => handlePrevious()}
            className={
              "w-36 rounded text-zinc-100 hover:opacity-100 font-bold bg-steelPink-600 " +
              (index <= 0 ? "opacity-50" : "opacity-100")
            }
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => handleNext()}
            className={
              "w-36 rounded text-zinc-100 hover:opacity-100 font-bold bg-steelPink-600 " +
              (index >= sectionItemsInArray - 1 ? "opacity-50" : "opacity-100")
            }
          >
            Next
          </button>
        </div>
        <a href={t(`Recommendations.Items.${index}.link`)} target="_blank">
          <div className="mt-6 p-4 bg-purple-100 rounded-md drop-shadow-lg hover:bg-purple-200">
            <div className="text-lg font-bold">
              {t(`Recommendations.Items.${index}.author`)}
            </div>
            <div className="pb-2 text-sm text-zinc-600">
              {t(`Recommendations.Items.${index}.relationship`)}
            </div>
            <div>{getParagraphs(index)}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Recommendations;
