import { ComponentProps } from "../../types";

function MiumLogo(props: ComponentProps) {
  const { className, theme } = props;

  return (
    <svg className={className} width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_0_1)">
        <rect x="4" y="4" width="100" height="100" rx="21" fill="white" />
        <rect x="6" y="6" width="96" height="96" rx="19" stroke="black" strokeWidth="4" />
      </g>
      <path d="M19.6367 42H24.0313L31.6719 60.6562H31.9531L39.5938 42H43.9883V66H40.543V48.6328H40.3203L33.2422 65.9648H30.3828L23.3047 48.6211H23.082V66H19.6367V42Z" fill="black" />
      <path d="M91.8839 54.8839C92.372 54.3957 92.372 53.6043 91.8839 53.1161L83.9289 45.1612C83.4408 44.673 82.6493 44.673 82.1612 45.1612C81.673 45.6493 81.673 46.4408 82.1612 46.9289L89.2322 54L82.1612 61.0711C81.673 61.5592 81.673 62.3507 82.1612 62.8388C82.6493 63.327 83.4408 63.327 83.9289 62.8388L91.8839 54.8839ZM52 55.25L91 55.25V52.75L52 52.75V55.25Z" fill="black" />
      <defs>
        {theme === "dark" ? (
          <filter id="filter0_d_0_1" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
          </filter>
        ) : (
          <filter id="filter0_d_0_1" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
          </filter>
        )}
      </defs>
    </svg>
  );
}

export default MiumLogo;
