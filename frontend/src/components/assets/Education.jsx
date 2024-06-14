export default function Education({ isHover,isActive }) {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10_97)">
          <path
            d="M4.995 12L15 18L30 9L15 0L0 9H15V12H4.995ZM0 12V24L3 20.67V13.8L0 12ZM15 30L7.5 25.5L4.5 23.7V14.7L15 21L25.5 14.7V23.7L15 30Z"
            fill={isActive ? "white" : "#4E4D4D"}
          />
        </g>
        <defs>
          <clipPath id="clip0_10_97">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
