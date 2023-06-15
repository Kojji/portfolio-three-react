import MachineCard from "./MachineCard";
import { FeatureMachineItem } from "../store/Home/home";
import { Link } from "react-router-dom";

function HomeReducedList({
  machines,
  origin,
}: {
  machines: FeatureMachineItem[];
  origin: string;
}) {
  // fix - use origin to determine route query on see more
  return (
    <div className="w-full p-3">
      <div className="flex flex-nowrap gap-2 lg:gap-3 xl:gap-4 border-t-2 overflow-x-auto">
        {machines.map((machine) => (
          <MachineCard {...machine} key={machine.machineId} />
        ))}

        <div className="bg-gray-300 dark:bg-gray-400 min-w-[160px] w-[160px] md:w-[220px] md:min-w-[220px] xl:w-[360px] xl:min-w-[360px] xl:max-w-[360px] flex items-center rounded-lg justify-center font-bold">
          <Link
            to={`/search`}
            className="hover:underline underline-offset-1 hover:text-blue-700 uppercase"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeReducedList;
