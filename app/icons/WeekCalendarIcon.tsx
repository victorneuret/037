import type { IIconProps } from "./interfaces";

const WeekCalendarIcon = ({
  height = 20,
  width = 20,
  color = "black",
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height="4" rx="0.5" fill={color} />
      <rect x="4" y="5" width="13" height="4" rx="0.5" fill={color} />
      <rect x="10" y="10" width="5" height="4" rx="0.5" fill={color} />
      <rect x="7" y="15" width="13" height="4" rx="0.5" fill={color} />
    </svg>
  );
};

export default WeekCalendarIcon;
