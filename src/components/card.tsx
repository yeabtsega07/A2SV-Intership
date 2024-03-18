import React from "react";

type TagProps = {
    text: string;
    color: string;
    bgColor?: string;
    border?: boolean;
};

const Tag: React.FC<TagProps> = ({ text, color, bgColor, border }: TagProps) => (
    <div
        className={`${
            border ? `border border-[${color}]` : `bg-[${bgColor}]`
        } w-[76px] h-[31px] rounded-[80px] p-[6px] gap-[8px] flex justify-center items-center`}
    >
        <div className={`font-epilogue font-semibold text-[12px] text-[${color}]`}>
            {text}
        </div>
    </div>
);

type CardProps = {
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
} : CardProps) => (
    <div className="h-[266px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px]">
        <div className="flex h-[100%] w-[100%]">
            <div className="h-[100%] w-[89px]">
                <img src={logo} className="h-[59px] w-[66px]" alt="logo" />
            </div>
            <div className="h-[100%] w-[755px] flex flex-col gap-[8px]">
                <div className="font-epilogue font-semibold text-[20px] text-[#25324B]">
                    {title}
                </div>
                <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
                    <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                        {company}
                    </div>
                    <div className="w-[4px] h-[4px] flex items-center justify-center bg-[#7C8493] rounded-full"></div>
                    <div className="font-epilogue font-normal text-[16px] text-[#7C8493]">
                        {location}
                    </div>
                </div>

                <div className="w-[744px] h-[112px] font-epilogue text-[16px] leading-[25.6px] text-[#25324B] font-[400]">
                    {description}
                </div>

                <div className="flex w-[242px] h-[31px] gap-[8px]">
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <Tag {...tag} />
                            {index === 0 && <div className="h-[100%] w-[1.5px] bg-gray-300"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Card;