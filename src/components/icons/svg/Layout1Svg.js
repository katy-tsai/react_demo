import React from "react";

const Layout1Svg = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.05"
        y="0.05"
        width="17.9"
        height="12.9"
        fill="white"
        stroke="black"
        strokeWidth="0.1"
      />
      {/* <mask id="path-2-inside-1_6_57" fill="white">
        <path d="M0 0H5.04V13H0V0Z" />
      </mask> */}
      <path d="M0 0H5.04V13H0V0Z" fill="#6C6C6C" />
      <path
        d="M0 0V-0.1H-0.1V0H0ZM0 13H-0.1V13.1H0V13ZM0 0.1H5.04V-0.1H0V0.1ZM5.04 12.9H0V13.1H5.04V12.9ZM0.1 13V0H-0.1V13H0.1Z"
        fill="black"
        mask="url(#path-2-inside-1_6_57)"
      />
      <mask id="path-4-inside-2_6_57" fill="white">
        <path d="M5.03998 0H18V2.08H5.03998V0Z" />
      </mask>
      <path d="M5.03998 0H18V2.08H5.03998V0Z" fill="#D9D9D9" />
      <path
        d="M18 0H18.1V-0.1H18V0ZM5.03998 0.1H18V-0.1H5.03998V0.1ZM17.9 0V2.08H18.1V0H17.9Z"
        fill="black"
        mask="url(#path-4-inside-2_6_57)"
      />
      <path
        d="M18 0H18.1V-0.1H18V0ZM5.03998 0.1H18V-0.1H5.03998V0.1ZM17.9 0V2.08H18.1V0H17.9Z"
        fill="black"
        mask="url(#path-4-inside-2_6_57)"
      />
      <path d="M5.03998 10.92H18" stroke="black" strokeWidth="0.1" />
    </svg>
  );
};

export default Layout1Svg;
