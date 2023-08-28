import { ComponentProps } from "../../types";

function MiumLogo(props: ComponentProps) {
  const { className } = props;

  return (
    <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_0_1)">
        <rect x="10" y="10" width="100" height="100" rx="21" fill="white" />
        <rect x="11" y="11" width="98" height="98" rx="20" stroke="black" stroke-width="4" />
      </g>
      <path d="M22.6367 48H27.0313L34.6719 66.6562H34.9531L42.5938 48H46.9883V72H43.543V54.6328H43.3203L36.2422 71.9648H33.3828L26.3047 54.6211H26.082V72H22.6367V48Z" fill="black" />
      <path d="M99.7778 60.7778C100.207 60.3482 100.207 59.6518 99.7778 59.2222L92.7775 52.2218C92.3479 51.7922 91.6514 51.7922 91.2218 52.2218C90.7922 52.6514 90.7922 53.3479 91.2218 53.7775L97.4444 60L91.2218 66.2225C90.7922 66.6521 90.7922 67.3486 91.2218 67.7782C91.6514 68.2078 92.3479 68.2078 92.7775 67.7782L99.7778 60.7778ZM57 61.1H99V58.9H57V61.1Z" fill="black" />
      <defs>
        <filter id="filter0_d_0_1" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default MiumLogo;