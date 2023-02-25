import type { IIconProps } from "./interfaces";

const ListIcon = ({ height = 20, width = 20, color = "black" }: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.5" width="11" height="1" rx="0.5" fill={color} />
      <rect x="1" y="1.5" width="18" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="2.5" width="18" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="3.5" width="17" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="4.5" width="13" height="0.5" rx="0.25" fill={color} />
      <rect x="2.5" y="7" width="5" height="1" rx="0.5" fill={color} />
      <path
        d="M1 7.5C1 7.22386 1.22386 7 1.5 7H2V7.5C2 7.77614 1.77614 8 1.5 8V8C1.22386 8 1 7.77614 1 7.5V7.5Z"
        fill={color}
      />
      <path
        d="M1 15.5C1 15.2239 1.22386 15 1.5 15H2V15.5C2 15.7761 1.77614 16 1.5 16V16C1.22386 16 1 15.7761 1 15.5V15.5Z"
        fill={color}
      />
      <path
        d="M1 0.5C1 0.223858 1.22386 0 1.5 0H2V0.5C2 0.776142 1.77614 1 1.5 1V1C1.22386 1 1 0.776142 1 0.5V0.5Z"
        fill={color}
      />
      <rect x="1" y="8.5" width="17.5" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="9.5" width="17.75" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="10.5" width="17.5" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="11.5" width="16" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="12.5" width="8" height="0.5" rx="0.25" fill={color} />
      <rect x="2.5" y="15" width="8" height="1" rx="0.5" fill={color} />
      <rect x="1" y="16.5" width="18" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="17.5" width="17" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="18.5" width="17.5" height="0.5" rx="0.25" fill={color} />
      <rect x="1" y="19.5" width="11" height="0.5" rx="0.25" fill={color} />
    </svg>
  );
};

export default ListIcon;
