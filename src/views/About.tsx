import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  function getParagraphs() {
    let content = [];
    for (let i = 0; i < 3; i++) {
      content.push(
        <div
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
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
    >
      <p className="text-3xl text-gray-700 font-bold mb-5">About Page!</p>
      {/* <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p> */}
      <div>{getParagraphs()}</div>
    </div>
  );
}

export default About;
