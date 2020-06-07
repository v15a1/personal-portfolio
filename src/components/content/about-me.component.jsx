import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Constants from "../../constants";
import { AboutMeImage } from "../../assets/images/about-me";

const AboutMe = ({ styles, windowHeight, windowWidth }) => {
  const { showSidebar } = styles;

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <Row
      style={{
        height: windowHeight
        // background: Constants.yellow,
        // paddingTop: Constants.appbarHeightPadding
      }}
    >
      <Col xs={12} sm={12} md={4} lg={3}>
        <AboutMeImage />
      </Col>
      <Col xs={12} sm={12} md={8} lg={9}>
        <div style={{width: 500}}>
          <h1>About Me</h1>
          <p style={{textAlign: "justify"}}>
            Hey! I'm Visal, a Software Engineering undergrad studying at the
            Informatics Institute of Technology in Colombo, Sri Lanka affliated
            with the University of Westminster, England. Enthusiast in Mobile
            Application Development, or Front End Development. The eventual
            career goal is to become a fully fledged and fully furnished iOS
            application developer.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMe;
