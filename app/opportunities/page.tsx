"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import Card from "@/components/card";
import cardData from "@/data/profile.json";

const Opportunity = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center bg-white py-10">
      <div className=" w-9/12 flex justify-between px-3  mb-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-950">Opportunities</h1>
          <p className=" text-slate-600">Showing 73 results</p>
        </div>

        <div className="flex gap-1 items-start">
          <p className=" text-slate-600">Sort by: </p>
          <div className="flex items-center gap-1">
            <p className=" text-slate-800 font-semibold pl-1"> Most relevant</p>
            <FaAngleDown className="text-slate-800" />
          </div>
        </div>
      </div>
      <div className=" w-9/12 flex flex-col gap-2 px-3  mb-4" >
        {cardData.map((data, index) => (
          <Card
            key={index}
            logo={data.imageUrl}
            title={data.title}
            company={data.company}
            location={data.location}
            description={data.description}
            tags={data.relatedTopics.map((tag, tagIndex) => {
              let tagProps = {
                color: "#000000",
                bgColor: "#ffffff",
                border: false,
              };
              if (tagIndex === 0) {
                tagProps = {
                  color: "#56CDAD",
                  bgColor: "#e0f5ef",
                  border: false,
                };
              } else if (tagIndex === 1) {
                tagProps = {
                  color: "#FFB836",
                  bgColor: "#ffffff",
                  border: true,
                };
              } else if (tagIndex === 2) {
                tagProps = {
                  color: "#4640DE",
                  bgColor: "#ffffff",
                  border: true,
                };
              }
              return { text: tag, ...tagProps };
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Opportunity;
