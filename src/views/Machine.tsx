import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchMachineInfo, getMachineInfo } from "../store/Machine/machineInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

function Machine() {
  const { machineId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const machineInfo = useAppSelector(getMachineInfo);
  const [enableAnimation, setEnableAnimation] = useState(true);

  let exampleArrayProduct = [
    "https://drive.google.com/uc?export=view&id=1VxnRRWzmg5jDy47hdZg30hRR-pKVH1jD",
    "https://drive.google.com/uc?export=view&id=1VxnRRWzmg5jDy47hdZg30hRR-pKVH1jD",
    "https://drive.google.com/uc?export=view&id=1VxnRRWzmg5jDy47hdZg30hRR-pKVH1jD",
    "https://drive.google.com/uc?export=view&id=1VxnRRWzmg5jDy47hdZg30hRR-pKVH1jD",
    "https://drive.google.com/uc?export=view&id=1VxnRRWzmg5jDy47hdZg30hRR-pKVH1jD",
  ];

  useEffect(() => {
    if (machineId) {
      dispatch(fetchMachineInfo(machineId));
    }
  }, []);

  function navigateBack() {
    navigate(-1);
  }

  function handleToggleAnimation(value: boolean) {
    setEnableAnimation(value);
  }

  return (
    <div className="container bg-gray-200 rounded-lg border mx-auto my-2 md:my-4">
      <div className="w-full flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="px-4 sm:pr-0 py-4">
            <img
              src={machineInfo.bannerPhoto[0]}
              className="rounded-lg w-full"
            ></img>
          </div>
          <div className="mx-4">
            <button
              className="uppercase hover:underline hover:bg-gray-300 focus:shadow-outline focus:outline-none my-2 p-2 rounded"
              type="button"
              onClick={navigateBack}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="mr-4" />
              Back
            </button>
            <div className="font-bold text-xl text-center pb-5 border-b-2 dark:border-pink-500 border-emerald-700 mb-5">
              {machineInfo.title}
            </div>
            <div className="flex flex-nowrap gap-2 lg:gap-3 xl:gap-4 border-t-2 overflow-x-auto">
              {exampleArrayProduct.map((element, index) => (
                <div
                  key={index}
                  className="min-w-[80px] w-[80px] md:w-[100px] md:min-w-[100px] xl:w-[160px] xl:min-w-[160px] xl:max-w-[160px] flex items-center rounded-lg"
                >
                  <img src={element} className="rounded-lg"></img>
                </div>
              ))}
            </div>
            <div className="my-4">Short description</div>
            <div className="flex flex-col px-2 my-4">
              <div>
                <input
                  type="radio"
                  checked={enableAnimation}
                  name="enableAnimation"
                  onChange={() => handleToggleAnimation(true)}
                />
                {" With Animation "}
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className="text-gray-400"
                />
              </div>
              <div>
                <input
                  type="radio"
                  checked={!enableAnimation}
                  name="enableAnimation"
                  onChange={() => handleToggleAnimation(false)}
                />
                {" Without Animation"}
              </div>
            </div>
            <div className="font-bold px-2 pb-2">
              <span>Price: </span>
              {machineInfo.discount > 0 && (
                <span className="text-red-700 line-through">{`$${machineInfo.price.toFixed(
                  2
                )} `}</span>
              )}
              <span>{`$${(machineInfo.price - machineInfo.discount).toFixed(
                2
              )} AUD`}</span>
            </div>
            <div>quantity</div>
            <div className="mt-10 flex justify-center">
              <button
                className="shadow bg-emerald-700 hover:bg-emerald-900 dark:bg-pink-600 dark:hover:bg-pink-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="my-4">Full desc</div>
        <div>other machines</div>
      </div>
    </div>
  );
}

export default Machine;
