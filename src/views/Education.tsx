import EducationSectionSmScreen from "../components/EducationSectionSmScreen";
import EducationSectionMdScreen from "../components/EducationSectionMdScreen";

import { useAppSelector } from "../store/hooks";
import { getWindowWidthState } from "../store/App/windowWidth";

function Education() {
  const windowWidthState = useAppSelector(getWindowWidthState);

  return (
    <div
      id="education-section"
      className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
    >
      {windowWidthState < 1024 && <EducationSectionSmScreen />}
      {windowWidthState >= 1024 && <EducationSectionMdScreen />}
    </div>
  );
}

export default Education;
