import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const sectionBadgeItemsInArray: number = Number(
    t(`InfoCards.Skills.Badges.SectionLength`)
  );

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
      iconUrl: "",
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

  function getSkillBadges() {
    let content = [];
    for (let i = 0; i < sectionBadgeItemsInArray; i++) {
      content.push(
        <div className="md:p-3 my-2" key={i}>
          <img
            src={t(`InfoCards.Skills.Badges.Icons.${i}.iconUrl`)}
            width={150}
            height={150}
            className="rounded"
            alt={t(`InfoCards.Skills.Badges.Icons.${i}.alt`)}
          />
          <p className="font-semibold text-center">
            {t(`InfoCards.Skills.Badges.Icons.${i}.name`)}
          </p>
        </div>
      );
    }
    return content;
  }

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
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 max-w-screen-md"
    >
      <h2 className="text-3xl text-center text-gray-700 font-bold mb-5">
        {t("InfoCards.Skills.PageTitle")}
      </h2>
      <div className="w-full">
        <div className="skill-text">{getSkillText()}</div>
      </div>
      <div className="px-3 py-4 w-full h-min bg-purple-100 rounded-md drop-shadow-lg">
        <div className="flex flex-wrap space-x-6 justify-center">
          {getSkillBadges()}
        </div>
      </div>
    </div>
  );
}

export default Skills;
