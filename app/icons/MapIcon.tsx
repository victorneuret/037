import type { IIconProps } from "./interfaces";

const MapIcon = ({ height = 20, width = 20, color = "black" }: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_207_132)">
        <path
          d="M4.5 -1L9.74536 9.96757C9.90246 10.2961 9.8686 10.684 9.65696 10.9803L2.5 21"
          stroke={color}
          stroke-linecap="round"
        />
        <path
          d="M13.5 -1L10.2164 9.78903C10.0879 10.2111 10.2513 10.6675 10.6184 10.9122L20.5 17.5"
          stroke={color}
          stroke-linecap="round"
        />
        <path
          d="M7.5 14L10.6137 16.2241C10.8581 16.3987 11.1682 16.4541 11.458 16.3751L15.8443 15.1788C16.2401 15.0709 16.5298 14.7322 16.5751 14.3245L16.9291 11.1378C16.9723 10.7492 16.785 10.371 16.4497 10.1698L15.1879 9.41271C14.786 9.17157 14.6055 8.68364 14.7537 8.23899L15.8046 5.08632C15.9243 4.72698 15.8308 4.33082 15.563 4.06298L13 1.5"
          stroke={color}
          stroke-width="0.5"
          stroke-linecap="round"
        />
        <path
          d="M13 1.5L20.4887 8.52069C20.7956 8.80842 20.8897 9.25747 20.7239 9.64414L19.7597 11.8939C19.6022 12.2616 19.2406 12.5 18.8406 12.5H17"
          stroke={color}
          stroke-width="0.5"
          stroke-linecap="round"
        />
        <path
          d="M13 16L15.5 20.5M7.5 14L-1 6.5"
          stroke={color}
          stroke-width="0.5"
          stroke-linecap="round"
        />
        <path
          d="M-0.5 16L3.45385 10.5635C3.48457 10.5212 3.51855 10.4814 3.55548 10.4445L5.2734 8.7266C5.42077 8.57923 5.61052 8.48158 5.8161 8.44732L8.5 8"
          stroke={color}
          stroke-width="0.5"
        />
        <path
          d="M5.5 8.5L2.12643 4.70474C1.77467 4.309 1.79234 3.70766 2.16673 3.33327L5 0.5"
          stroke={color}
          stroke-width="0.5"
        />
        <path
          d="M7 4C7.5 3 8 2 9.5 2C11 2 11.5 3 12 4"
          stroke={color}
          stroke-width="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_207_132">
          <rect width="20" height="20" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MapIcon;
