import React from "react";
import { Logo } from "../../assets/images/logo";
import ImageAssets from "../../assets/image-assets";

export const Header = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: "#f8f8f8",
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
        <Logo />
      </div>
      <div>
        {iconData.map(icon => {
          return (
            <a href={icon.url} target="_blank">
              <img src={icon.imageSrc} width={30} style={spanStyle} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const iconData = [
  {
    url: "https://github.com/v15a1",
    imageSrc: ImageAssets.githubImage
  },
  {
    url: "https://www.linkedin.com/in/visalrajapakse99/",
    imageSrc: ImageAssets.linkedInImage
  },
  {
    url: "https://medium.com/@visalrajapakse",
    imageSrc: ImageAssets.mediumImage
  }
];

export default Header;
