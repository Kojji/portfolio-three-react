import { FeatureMachineItem } from "../store/Home/home";
import { Link } from "react-router-dom";

function MachineCard({
  machineId,
  bannerPhoto,
  title,
  price,
  type,
  discount,
}: FeatureMachineItem) {
  return (
    <Link
      to={`/machine/${machineId}`}
      className="bg-white dark:bg-zinc-600 min-w-[170px] w-[170px] md:w-[240px] md:min-w-[240px] xl:w-[360px] xl:min-w-[360px] xl:max-w-[360px] flex flex-col rounded-lg justify-between"
      key={machineId}
    >
      <img src={bannerPhoto} className="rounded-lg"></img>
      <div>
        <p className="text-sm dark:text-gray-100 font-bold mt-4 mx-2">
          {title}
        </p>
        <div className="font-bold float-right dark:text-gray-100 px-2 pb-2">
          {discount > 0 && (
            <span className="text-red-700 dark:text-red-300 line-through">{`$${price.toFixed(
              2
            )} `}</span>
          )}
          <span>{`$${(price - discount).toFixed(2)} AUD`}</span>
        </div>
      </div>
    </Link>
  );
}

export default MachineCard;
