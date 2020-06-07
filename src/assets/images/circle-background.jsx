import React from "react";
import Colors from "../../colors";

export const CircleBackground = ({ style, darkmode }) => {
  return (
    <svg
      style={style}
      viewBox="0 0 720 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="360" cy="360" r="360" fill={darkmode ? Colors.darkModeYellow : Colors.lightModeYellow} />
    </svg>
  );
};
