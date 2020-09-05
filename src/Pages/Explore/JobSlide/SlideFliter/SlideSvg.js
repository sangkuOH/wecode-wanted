import React from "react";

const SlideSvg = {
  SlideOff: (
    <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
      <path
        fill="currentColor"
        d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
      ></path>
    </svg>
  ),
  BookMark: (
    <svg width="15" height="17" viewBox="0 0 13 17" color="#36f">
      <defs>
        <path
          id="bookmarkIconFill"
          d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" xlinkHref="#bookmarkIconFill"></use>
      </g>
    </svg>
  ),
};

export default SlideSvg;
