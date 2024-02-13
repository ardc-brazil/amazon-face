import React from "react";

export default function SearchIcon(props) {
  return (

    <svg
      className={`min-w-fit w-5 h-5 inline-block fill-primary-600 ${props.className}`}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      fill="none">
      <g>
        <path
          d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49   s11.7-26,26-26S90,34.7,90,49z" />
        <path
          d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z" />
      </g>

    </svg>
  );
}

