export type TagProps = {
    text: string;
    color: string;
    bgColor?: string;
    border?: boolean;
  };
  


export const Tag: React.FC<TagProps> = ({
    text,
    color,
    bgColor,
    border,
}: TagProps) => {
    return (
        <div
            style={{
                color: ` ${color}`,
                backgroundColor: bgColor ? `${bgColor}` : "white",
                border: border ? `1px solid ${color}` : "none",
            }}
            className={`${
                border ? `border border-[${color}]` : `bg-[${bgColor}]`
            } rounded-full p-2 flex justify-center items-center`}
        >
            <div
                className={`font-epilogue font-semibold text-[12px]  text-[${color}]`}
            >
                {text}
            </div>
        </div>
    );
};