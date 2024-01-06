import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const sectionItemsInArray: number = Number(
    t(`InfoCards.Personal.Paragraphs.length`)
  );

  function getParagraphs() {
    let content = [];
    for (let i = 0; i < sectionItemsInArray; i++) {
      content.push(
        <div
          className="pb-3"
          key={i}
          dangerouslySetInnerHTML={{
            __html: t(`InfoCards.Personal.Paragraphs.${i}`),
          }}
        ></div>
      );
    }
    return content;
  }

  return (
    <div
      id="about-section"
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 max-w-screen-md"
    >
      <p className="text-3xl text-gray-700 font-bold mb-5">
        {t(`InfoCards.Personal.PageTitle`)}
      </p>
      {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p> */}
      <div>{getParagraphs()}</div>
    </div>
  );
}

export default About;
