import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import Constants from "../../constants";
import { AboutMeImage } from "../../assets/images/about-me";
import Fonts from "../../assets/fonts/fonts";
import "./about-me.scss";
import Colors from "../../colors";

const AboutMe = ({ styles, windowHeight, windowWidth }) => {
  const { showSidebar } = styles;
  var ReactRotatingText = require("react-rotating-text");

  return (
    <Row
      style={{
        background: Colors.black,
        color: Colors.white
        // paddingTop: Constants.appbarHeightPadding
      }}
    >
      <Col xs={12} sm={12} md={6} lg={6}>
        {/* <AboutMeImage /> */}
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <div style={{ padding: 20, lineHeight: 1.6 }}>
          <div style={{ textAlign: "left" }}>
            <span style={{ fontFamily: Fonts.GilroyBlack, fontSize: 60 }}>
              About Me
            </span>
            <div style={{textAlign: "justify"}}>
              <p style={Constants.paraStyle}>
                Hey! I'm Visal, a Software Engineering undergrad studying at the
                <span style={{ fontFamily: Fonts.JetBrainsMonoBold }}>
                  {" "}
                  Informatics Institute of Technology
                </span>{" "}
                in Colombo, Sri Lanka affliated with the University of
                Westminster, England. Enthusiast in Mobile Application
                Development, or Front End Development . The eventual career goal
                is to become a fully fledged and fully furnished{" "}
                <span style={{ fontFamily: Fonts.JetBrainsMonoBold }}>
                  iOS application developer.
                </span>
              </p>
            </div>
          </div>

          <span
            style={{
              fontFamily: Fonts.JetBrainsMonoRegular,
              fontSize: 28,
              color: Colors.black,
              textAlign: "center"
            }}
          >
            <span
              style={{
                fontSize: 28,
                color: Colors.yellowOrchre
              }}
            >
              I'm a fan of{<br />}
            </span>
            <span
              style={{
                fontFamily: Fonts.JetBrainsMonoBold,
                background: Colors.yellowOrchre
              }}
            >
              #<ReactRotatingText items={interests} />
            </span>
          </span>
          <br />
          <div style={{ marginTop: windowHeight / 10 }}>
            {contactInfo.map(info => (
              <ContactInfo text={info} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMe;

export const ContactInfo = ({ text }) => {
  return (
    <Row style={{ margin: "10px 0 10px 0" }}>
      <div
        className={"contact-info"}
        style={{ fontFamily: Fonts.JetBrainsMonoRegular }}
      >
        {text}
      </div>
    </Row>
  );
};

const interests = [
  "mobile_app_dev",
  "front_end_dev",
  "android_dev",
  "drawing",
  "ui/ux",
  "ios_dev",
  "graphic_designing"
];

const contactInfo = [
  "Email : visalrajapakse@gmail.com",
  "Phone : +94 77 011 5903"
];
