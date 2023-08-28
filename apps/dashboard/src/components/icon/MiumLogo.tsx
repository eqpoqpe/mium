import { ComponentProps } from "../../types";

function MiumLogo(props: ComponentProps) {
  const { className } = props;

  return (
    <svg className={className} width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_0_1)">
        <rect x="5" y="5" width="100" height="100" rx="21" fill="white" />
        <rect x="6" y="6" width="98" height="98" rx="20" stroke="black" stroke-width="2" />
      </g>
      <path d="M17.6367 43H22.0313L29.6719 61.6562H29.9531L37.5938 43H41.9883V67H38.543V49.6328H38.3203L31.2422 66.9648H28.3828L21.3047 49.6211H21.082V67H17.6367V43Z" fill="black" />
      <path d="M94.7778 55.7778C95.2074 55.3482 95.2074 54.6518 94.7778 54.2222L87.7775 47.2218C87.3479 46.7922 86.6514 46.7922 86.2218 47.2218C85.7922 47.6514 85.7922 48.3479 86.2218 48.7775L92.4444 55L86.2218 61.2225C85.7922 61.6521 85.7922 62.3486 86.2218 62.7782C86.6514 63.2078 87.3479 63.2078 87.7775 62.7782L94.7778 55.7778ZM52 56.1H94V53.9H52V56.1Z" fill="black" />
      <defs>
        <filter id="filter0_d_0_1" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default MiumLogo;