'use client'

import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import Card from "@/components/card";
import { useGetOpportunitiesQuery } from "@/redux/slice/api";
import { Skeleton } from "@/components/ui/skeleton";


const Opportunity = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useGetOpportunitiesQuery();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const opportunities = data?.data;

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
      <div className=" w-9/12 flex flex-col gap-2 px-3  mb-4">
        {loading ? (
          // Display skeleton loading while data is being fetched
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-[200px] bg-slate-300" />
          ))
          // ))
        ) : (
          // Render actual data when loaded
          opportunities?.map((data, index) => (
            <Link key={index} href={`/opportunities/${data.id}`}>
              <Card
                key={index}
                logo={data.logoUrl}
                title={data.title}
                company={data.orgName}
                location={data.location.join(" ")}
                description={data.description}
                tags={data.requiredSkills.map((tag, tagIndex) => {
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
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Opportunity;
