import awsLogo from "/src/assets/amazon-web-services-logo.png";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const skillIcons = [
    {
      name: "Node.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "nodejs icon",
    },
    {
      name: "Vue.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      alt: "vuejs icon",
    },
    {
      name: "Firebase",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      alt: "firebase icon",
    },
    {
      name: "AWS",
      iconUrl: awsLogo,
      alt: "amazon web services icon",
    },
    {
      name: "Typescript",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "typescript icon",
    },
    {
      name: "Tailwind",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      alt: "tailwind css icon",
    },
    {
      name: "React",
      iconUrl: "",
      alt: "react icon",
    },
  ];

  function getSkillText() {
    let content = [];
    for (let i = 0; i < 4; i++) {
      content.push(
        <div
          className="md:my-6 my-3"
          dangerouslySetInnerHTML={{
            __html: t(`InfoCards.Skills.Paragraphs.${i}`),
          }}
        ></div>
      );
    }
    return content;
  }

  return (
    <div
      id="skill-section"
      className="container mx-auto bg-gray-200 rounded-xl shadow border md:px-10 px-5 flex flex-col m-10"
    >
      <h2 className="py-4 mx-auto font-bold lg:text-3xl md:text-2xl text-xl">
        {t("InfoCards.Skills.PageTitle")}
      </h2>
      <div className="inline-flex">
        <div className="px-3 py-4 lg:w-1/4 w-1/3 h-min bg-purple-100 rounded-md drop-shadow-lg">
          <div className="px-3 bg-gray-100 font-semibold xl:text-lg text-base rounded-t-md uppercase">
            {t("InfoCards.Skills.CardOne")}
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
            {skillIcons.map(({ name, iconUrl, alt }, key) => (
              <div className="md:p-3 my-2" key={key}>
                <img
                  src={iconUrl}
                  className={name === "AWS" ? "rounded my-4" : "rounded"}
                  alt={alt}
                />
                <p className="font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:px-10 px-5">
          <div className="skill-text">{getSkillText()}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
