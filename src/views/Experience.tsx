import ExperienceSectionSmScreen from "../components/ExperienceSectionSmScreen";
import ExperienceSectionMdScreen from "../components/ExperienceSectionMdScreen";

import { useAppSelector } from "../store/hooks";
import { getWindowWidthState } from "../store/App/windowWidth";

function Experience() {
  const windowWidthState = useAppSelector(getWindowWidthState);

  return (
    <div
      id="experience-section"
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
    >
      {windowWidthState < 1024 && <ExperienceSectionSmScreen />}
      {windowWidthState >= 1024 && <ExperienceSectionMdScreen />}
    </div>
  );
}

export default Experience;
