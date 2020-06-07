import React, { useState, useEffect, useRef } from "react";
import ImageAssets from "../../assets/image-assets";
import { CircleBackground } from "../../assets/images/circle-background";
import { Grid, Row, Col } from "react-flexbox-grid";
import Fonts from "../../assets/fonts/fonts";
// import Pdf from "."
// import "../../Visal-Rajapakse.pdf";

export const LandingComponent = ({ windowWidth, windowHeight }) => {
  const [divHeight, setHeight] = useState(0);
  const [divWidth, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
  });

  const circleStyle = {
    position: "absolute",
    left: windowWidth > 768 ? "20%" : 0,
    top: "30%",
    zIndex: -2
  };

  return (
    <Row>
      <Col xs={12} sm={12} md={5} lg={5} style={{ padding: 16 }}>
        <div
          ref={ref}
          style={{
            textAlign: "left",
            zIndex: -1,
            position: "relative",
            top: windowWidth < 768 ? 0 : windowHeight / 2 - divHeight / 1.5,
            left: windowWidth < 768 ? 0 : windowWidth/2 - divWidth

            // marginLeft: windowWidth > 768 ? "50%" : 0
          }}
        >
          <div
            style={{
              fontFamily: Fonts.GilroyBlack,
              fontSize: windowHeight * 0.1,
              width: 100
            }}
          >
            <span style={{ float: "left"}}>Visal</span>
            <span>Rajapakse</span>
          </div>

          <br />
          <div>
            {personalInterests.map(interest => {
              return (
                <p style={{ fontFamily: Fonts.JetBrainsMonoBold }}>
                  {interest}
                </p>
              );
            })}
          </div>
          <a target="_blank" className={"cv-button"} href="./cv.pdf">
            <span style={{ fontFamily: Fonts.JetBrainsMonoRegular }}>
              Download CV
            </span>
          </a>
        </div>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={7}
        lg={7}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ overflow: "hidden" }}>
          <div style={{ position: "relative" }}>
            <img
              src={ImageAssets.personalPhoto}
              style={{
                position: "relative",
                left: windowWidth > 768 ? "10%" : 0,
                zIndex: -1
              }}
              height={windowWidth < 460 ? null : windowHeight - 90}
              width={windowWidth < 460 ? windowWidth : null}
            />
            <CircleBackground width={300} height={300} style={circleStyle} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

const personalInterests = ["// Undergrad", "// iOS Enthusiast", "// UI/UX"];
