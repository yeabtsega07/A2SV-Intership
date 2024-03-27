import Image from "next/image";
import { GoShareAndroid } from "react-icons/go";

interface cardBarProps {
  logo: string;
  title: string;
  location: string;
  company: string;
}

const CardBar = ({ logo, title, location, company }: cardBarProps) => {
  return (
    <div className=" w-9/12 flex flex-col sm:flex-row bg-white p-6 rounded-3xl border shadow-sm">
      <div className=" flex flex-col sm:flex-row w-full justify-between px-3">
        <div className="flex flex-col sm:flex-row ">
          <div className="flex-shrink-0 sm:mr-6 mb-4 sm:mb-0">
          <Image src={logo || '/placeholder.jpg'} alt="logo" width={66} height={59} />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900 mb-2">
              {title}
            </h2>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="mr-2">{company}</span>
              <span className="h-1 w-1 bg-gray-600 rounded-full mr-2"></span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="text-black flex  items-center">
            <GoShareAndroid className="w-6 h-6 text-slate-500" />
            <div className=" ml-4 h-10 w-[1px] bg-gray-300" />
          </div>
          <div className=" mx-4 flex items-center">
            <button className="rounded-full w-32 bg-blue-900 p-2 text-white">
                Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBar;
