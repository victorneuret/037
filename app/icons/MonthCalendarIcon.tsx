import type { IIconProps } from "./interfaces";

const MonthCalendarIcon = ({
  height = 20,
  width = 20,
  color = "black",
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 20 20`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="7" height="2" rx="0.5" fill={color} />
      <rect x="1" y="4" width="18" height="0.2" rx="0.1" fill={color} />
      <rect x="1" y="8" width="18" height="0.2" rx="0.1" fill={color} />
      <rect x="1" y="12" width="18" height="0.2" rx="0.1" fill={color} />
      <rect x="1" y="16" width="18" height="0.2" rx="0.1" fill={color} />
      <rect x="9" y="1" width="10" height="2" rx="0.5" fill={color} />
      <rect x="3" y="5" width="12" height="2" rx="0.5" fill={color} />
      <rect x="1" y="17" width="10" height="2" rx="0.5" fill={color} />
      <rect x="12" y="13" width="8" height="2" rx="0.5" fill={color} />
      <path
        d="M9 9.5C9 9.22386 9.22386 9 9.5 9H20V11H9.5C9.22386 11 9 10.7761 9 10.5V9.5Z"
        fill={color}
      />
      <path
        d="M0 13H4.5C4.77614 13 5 13.2239 5 13.5V14.5C5 14.7761 4.77614 15 4.5 15H0V13Z"
        fill={color}
      />
    </svg>
  );
};

export default MonthCalendarIcon;
