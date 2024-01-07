import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../store/hooks";
import { getAccordionActiveState } from "../store/FAQAccordion/accordionActive";
import { useAppDispatch } from "../store/hooks";
import {
  closeAccordion,
  openAccordion,
} from "../store/FAQAccordion/accordionActive";

interface AccordionItem {
  title: string;
  children: string;
  index: number;
}

function FAQAccordion({ title, children, index }: AccordionItem) {
  const dispatch = useAppDispatch();
  const accordionActiveState = useAppSelector(getAccordionActiveState);

  function toggleAccordion() {
    if (accordionActiveState === index) {
      dispatch(closeAccordion());
    } else {
      dispatch(openAccordion(index));
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <div
          className={`flex justify-between px-2 py-4 items-center shadow-lg my-1 rounded-lg text-zinc-100 cursor-pointer ${
            accordionActiveState === index ? "bg-zinc-600" : "bg-zinc-500"
          }`}
          onClick={toggleAccordion}
        >
          <span className={accordionActiveState === index ? "font-bold" : ""}>
            {title}
          </span>
          <button
            className="relative inline-block text-white hover:text-purple-400 items-center justify-center align-center outline-none focus:outline-none mx-2"
            type="button"
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className={
                accordionActiveState === index
                  ? "rotate-180 fa-xl"
                  : "rotate-0 fa-xl"
              }
            />
          </button>
        </div>
        {accordionActiveState === index && (
          <div
            className="p-1"
            dangerouslySetInnerHTML={{
              __html: children,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default FAQAccordion;
