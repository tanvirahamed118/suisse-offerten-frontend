import { Link } from "react-router-dom";

function AllJobCategory() {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Outside
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Inside
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Planning & Consulting
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Car/Vehicles
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Moving, moving house
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Cleaning
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Transport & Disposal
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-gray-500 font-normal text-base hover:underline"
        >
          Other
        </Link>
      </li>
    </ul>
  );
}

export default AllJobCategory;
