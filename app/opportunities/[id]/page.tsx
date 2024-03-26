"use client";

import CardBar from "@/components/cardBar";
import { useParams } from "next/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";
import cardData from "@/data/profile.json";
import jobDetail from "@/data/detail.json";
import { FaTruckLoading } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { BsCalendar2Plus } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { PiCalendarCheck, PiCalendarPlusLight } from "react-icons/pi";
import { Tag } from "@/components/tag";

const OpportunityDetail = () => {
  const { id } = useParams();

  const opportunity = cardData.find((item) => String(item.id) === String(id));

  if (!opportunity) {
    return <FaTruckLoading />;
  }

  const {
    description,
    responsibilities,
    idealCandidate,
    whenAndWhere,
    about,
    categories,
    requiredSkills,
  } = jobDetail;

  return (
    <div className="flex flex-col items-center py-10 w-full bg-white">
      <CardBar
        logo={opportunity.imageUrl}
        title={opportunity.title}
        location={opportunity.location}
        company={opportunity.company}
      />
      <div className="h-[1px] w-9/12 px-20 mb-5  bg-gray-300"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 p-8 w-full sm:w-9/12">
        <div className="sm:col-span-2 py-12 flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h2 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
              {description.heading}
            </h2>
            <p className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
              {description.content}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
              Responsibilities
            </h3>
            <ul className="list-disc flex flex-col gap-2">
              {responsibilities.map((item: string, key: number) => (
                <li
                  key={key}
                  className="flex items-center font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]"
                >
                  <span className="mr-2">
                    <FaRegCircleCheck className="text-green-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
              Ideal Candidate we want
            </h3>
            <ul className="list-disc pl-6">
              {idealCandidate.map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                    <span className="font-semibold">{item.label}</span>{" "}
                    {item.description && item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
              When and Where
            </h3>
            <div className="flex gap-4 items-center">
              <CiLocationOn className="text-blue-500 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
              <p className="text-black">{whenAndWhere.onboardingEvent}</p>
            </div>
          </div>
        </div>
        <aside className="sm:col-span-1">
          <h3 className="font-poppins font-extrabold text-3xl mb-5 leading-7 text-gray-900">
            About
          </h3>
          <ul className="list-disc mb-6 flex flex-col gap-5">
            <li className="flex items-center gap-4">
              <HiOutlinePlusCircle className="text-blue-500 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
              <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                <p>Posted on</p>
                <p className="font-semibold">{about.postedOn}</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <AiOutlineFire className="text-blue-500 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
              <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                <p>Deadline</p>
                <p className="font-semibold">{about.deadline}</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CiLocationOn className="text-blue-500 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
              <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                <p>Location</p>
                <p className="font-semibold">{about.location}</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
            <PiCalendarPlusLight className="text-blue-500 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
              <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                <p>Start Date</p>
                <p className="font-semibold">{about.startDate}</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <PiCalendarCheck className="text-blue-500 rounded-full border border-[#D6DDEB] p-2 w-12 h-12" />
              <div className="font-epilogue font-normal text-base leading-[25.6px] text-[#25324B]">
                <p>End Date</p>
                <p className="font-semibold">{about.endDate}</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-col gap-6 justify-between mb-6">
            <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
              Categories
            </h3>
            <div className="flex gap-2 items-center">
              {categories.map((category, index) => (
                <Tag 
                    key={index} 
                    text={category} 
                    color={index % 2 === 0 ? "#FFB836" : "#56CDAD"} 
                    bgColor={index % 2 === 0 ? "#eb863329" : "#e0f5ef"} 
                />
              ))}
            </div>
          </div>
          <div className="w-full border border-[#D6DDEB] mb-6"></div>
          <div className="flex flex-col gap-4">
            <h3 className="font-poppins font-extrabold text-3xl leading-7 text-gray-900">
              Required Skills
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              {requiredSkills.map((skill, index) => (
                  <Tag key={index} text={skill} color={"#4640DE"} bgColor="#c4c2fa1f" />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default OpportunityDetail;
