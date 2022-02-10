import React from "react";
import Colors from "../../colors";
export const MediumIcon = ({ darkmode, style }) => (
  <svg
    style={style}
    // width="240"
    // height="240"
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M216 19.2H24C21.3504 19.2 19.2 21.3504 19.2 24V216C19.2 218.65 21.3504 220.8 24 220.8H216C218.65 220.8 220.8 218.65 220.8 216V24C220.8 21.3504 218.65 19.2 216 19.2ZM192 64.8L183.259 75.3456C182.707 75.8928 182.4 76.632 182.4 77.4V157.2C182.4 157.968 182.707 158.707 183.259 159.254L192 170.621V172.8H144V170.621L157.541 159.254C158.093 158.707 158.4 157.968 158.4 157.2V85.8192L119.27 172.8H119.266H111.859L72 88.2V151.118C72 152.174 72.3648 153.197 73.032 154.022L86.4 170.621V172.8H48V170.621L61.3584 154.118C62.0304 153.293 62.4 152.261 62.4 151.2V78.6624C62.4 77.9808 62.16 77.3232 61.7184 76.8L52.8 64.8V62.4H86.8656L123.461 140.078L158.41 62.4H192V64.8Z"
      fill={darkmode ? Colors.white : Colors.black}
    />
  </svg>
);