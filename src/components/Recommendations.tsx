import { useTranslation } from "react-i18next";

function Recommendations() {
  const { t } = useTranslation();

  const recommendationsLength: number = Number(
    t(`Recommendations.SectionLength`)
  );

  function getRecommendations() {
    let content = [];
    for (let i = 0; i < recommendationsLength; i++) {
      content.push(
        <a href={t(`Recommendations.Items.${i}.link`)} key={i}>
          <div>{t(`Recommendations.Items.${i}.content`)}</div>
          <div>{t(`Recommendations.Items.${i}.author`)}</div>
          {/* <button className="hover:bg-purple-400 hover:text-zinc-100 w-full flex items-center p-1 rounded-md font-semibold text-lg">
            {t(`InfoCards.Education.Sections.${index}.items.${i}.valueMenu`)}
          </button> */}
        </a>
      );
    }
    return content;
  }

  return (
    <div
      id="recommendations"
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
    >
      {getRecommendations()}
    </div>
  );
}

export default Recommendations;
