import React from "react";
import Image from "next/image";
import { Tag, TagProps } from "./tag";

export type CardProps = {
  logo: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: TagProps[];
};

const Card: React.FC<CardProps> = ({
  logo,
  title,
  company,
  location,
  description,
  tags,
}: CardProps) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white p-6 rounded-3xl border shadow-sm">
      <div className="flex-shrink-0 sm:mr-6 mb-4 sm:mb-0">
        <Image src={logo} alt="logo" width={66} height={59} />
      </div>
      <div className="flex-grow">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-2">{company}</span>
          <span className="h-1 w-1 bg-gray-600 rounded-full mr-2"></span>
          <span>{location}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex  flex-col sm:flex-row space-x-2">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <Tag {...tag} />
              {index === 0 && <div className="h-10 w-[1px] bg-gray-300"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;