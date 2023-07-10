import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Animations.css";

import beachWavesVideo from "/src/assets/videos/shortVer.mp4";
import cityLightsVideo from "/src/assets/videos/city_lights.mp4";
import surfingPikachu from "/src/assets/videos/surfing.mp4";
import octopiano from "/src/assets/videos/octopiano.mp4";
import squares from "/src/assets/videos/squares.mp4";
import rotating from "/src/assets/videos/rotating.mp4";
import cookingKirby from "/src/assets/videos/cookingKirby.mp4";

function Animations() {
  const { t } = useTranslation();

  function playOnHover(elementId: string) {
    let element = document.getElementById(elementId) as HTMLVideoElement;
    element.play();
  }
  function pauseOnLeave(elementId: string) {
    let element = document.getElementById(elementId) as HTMLVideoElement;
    element.pause();
  }
  function iconAppear(iconId: string) {
    let icon = document.getElementById(iconId);
    icon?.classList.remove("invisible");
  }
  function iconDisappear(iconId: string) {
    let icon = document.getElementById(iconId);
    icon?.classList.add("invisible");
  }

  const animations = [
    {
      name: "Cooking Kirby",
      component: cookingKirby,
      reference: "kirbyVid",
      link: "https://codepen.io/kojji/full/LYdqqjr",
    },
    {
      name: "Octopiano",
      component: octopiano,
      reference: "octopianoVid",
      link: "https://codepen.io/kojji/full/abVxxOQ",
    },
    {
      name: "Surfing Pikachu",
      component: surfingPikachu,
      reference: "surfingPikachuVid",
      link: "https://codepen.io/kojji/full/poaYvVL",
    },
    {
      name: "GSAP outlines rotation",
      component: rotating,
      reference: "rotatingVid",
      link: "https://codepen.io/kojji/full/LYdgmdg",
    },
    {
      name: "GSAP Rotating Squares",
      component: squares,
      reference: "squaresVid",
      link: "https://codepen.io/kojji/full/poLxrMW",
    },
    {
      name: "Beach Waves",
      component: beachWavesVideo,
      reference: "beachVid",
      link: "https://codepen.io/kojji/full/QWOJJGQ",
    },
    {
      name: "City Lights",
      component: cityLightsVideo,
      reference: "cityLightsVid",
      link: "https://codepen.io/kojji/full/zYPyPJV",
    },
  ];

  function getAnimationCards() {
    let content = [];
    for (let i = 0; i < animations.length; i++) {
      content.push(
        <div
          key={animations[i].name}
          className="rounded-md bg-purple-100 h-min p-2"
        >
          <a href={animations[i].link} target="_blank">
            <span
              className="font-semibold text-lg hover:text-blue-600"
              onMouseOver={() => iconAppear(`${animations[i].reference}Icon`)}
              onMouseLeave={() =>
                iconDisappear(`${animations[i].reference}Icon`)
              }
            >
              {animations[i].name}
              <FontAwesomeIcon
                id={`${animations[i].reference}Icon`}
                className="invisible ml-2"
                icon={faArrowUpRightFromSquare}
              />
            </span>
          </a>
          <video
            id={animations[i].reference}
            onMouseOver={() => playOnHover(animations[i].reference)}
            onMouseLeave={() => pauseOnLeave(animations[i].reference)}
            muted={true}
          >
            <source src={animations[i].component} type="video/mp4" />
          </video>
        </div>
      );
    }
    return content;
  }

  return (
    <div
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex flex-col"
      id="animation-card"
    >
      <h2 className="py-4 mx-auto font-bold lg:text-3xl md:text-2xl text-xl">
        {t("InfoCards.Animation.PageTitle")}
      </h2>
      <div className="w-full lg:px-10 px-5">
        <div className="animation-text">
          <p
            className="md:my-6 my-3"
            dangerouslySetInnerHTML={{
              __html: t(`InfoCards.Animation.TextOne`),
            }}
          ></p>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-2 gap-1">
        {getAnimationCards()}
      </div>
    </div>
  );
}

export default Animations;
