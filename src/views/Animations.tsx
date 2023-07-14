import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Animations.css";

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

  function getAnimationCards() {
    let content = [];
    for (let i = 0; i < Number(t(`InfoCards.Animation.SectionLength`)); i++) {
      content.push(
        <div
          key={t(`InfoCards.Animation.Sections.${i}.name`)}
          className="rounded-md bg-purple-100 h-min p-2"
        >
          <a href={t(`InfoCards.Animation.Sections.${i}.link`)} target="_blank">
            <span
              className="font-semibold text-lg hover:text-blue-600"
              onMouseOver={() =>
                iconAppear(
                  `${t(`InfoCards.Animation.Sections.${i}.reference`)}Icon`
                )
              }
              onMouseLeave={() =>
                iconDisappear(
                  `${t(`InfoCards.Animation.Sections.${i}.reference`)}Icon`
                )
              }
            >
              {t(`InfoCards.Animation.Sections.${i}.name`)}
              <FontAwesomeIcon
                id={`${t(`InfoCards.Animation.Sections.${i}.reference`)}Icon`}
                className="invisible ml-2"
                icon={faArrowUpRightFromSquare}
              />
            </span>
          </a>
          <video
            id={t(`InfoCards.Animation.Sections.${i}.reference`)}
            onMouseOver={() =>
              playOnHover(t(`InfoCards.Animation.Sections.${i}.reference`))
            }
            onMouseLeave={() =>
              pauseOnLeave(t(`InfoCards.Animation.Sections.${i}.reference`))
            }
            muted={true}
          >
            <source
              src={t(`InfoCards.Animation.Sections.${i}.component`)}
              type="video/mp4"
            />
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
