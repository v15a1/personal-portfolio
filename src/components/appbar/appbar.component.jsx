import React, { useState } from "react";
import { Logo } from "../../assets/images/logo";
import { GithubIcon } from "../../assets/images/github-icon";
import { LinkedInIcon } from "../../assets/images/linkediIn-icon";
import { MediumIcon } from "../../assets/images/medium-icon";
import { MoonIcon } from "../../assets/images/moon-icon";
import Colors from "../../colors";
import { SunIcon } from "../../assets/images/sun-icon";

export const Header = ({ styles }) => {
  const [darkmode, setDarkMode] = useState(false);

  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: darkmode ? Colors.ash : Colors.lightGrey,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  const spanStyle = {
    margin: 10
  };

  return (
    <div style={topBarStyle}>
      <div>
        <Logo darkmode={darkmode} />
      </div>
      <div>
        {iconData.map(icon => {
          return (
            <a href={icon.url} target="_blank">
              {/* <img src={icon.imageSrc} width={30} style={spanStyle} /> */}
              <icon.imageSrc style={iconStyle} darkmode={darkmode} />
            </a>
          );
        })}
        <a
          onClick={() => {
            darkmode ? setDarkMode(false) : setDarkMode(true);
          }}
        >
          {darkmode ? (
            <SunIcon darkmode={darkmode} style={iconStyle} />
          ) : (
            <MoonIcon darkmode={darkmode} style={iconStyle} />
          )}
        </a>
      </div>
    </div>
  );
};

const iconData = [
  {
    url: "https://github.com/v15a1",
    imageSrc: GithubIcon
  },
  {
    url: "https://www.linkedin.com/in/visalrajapakse99/",
    imageSrc: LinkedInIcon
  },
  {
    url: "https://medium.com/@visalrajapakse",
    imageSrc: MediumIcon
  }
];

export default Header;

const iconStyle = {
  width: 30,
  margin: 10
};
