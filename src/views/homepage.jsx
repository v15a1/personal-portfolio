import React from "react";
import Header from "../components/appbar/appbar.component";
import AboutMe from "../components/content/about-me.component";
import ImageAssets from "../assets/image-assets";
import { CircleBackground } from "../assets/images/circle-background";
import { Grid, Row, Col } from "react-flexbox-grid";
import ScrollSnap from "scroll-snap";
import Fonts from "../assets/fonts/fonts";

import "./homepage.scss";
import { LandingComponent } from "../components/landing-component/landing-component.component";
import Constants from "../constants";

function callback() {
  console.log("snapped");
}
export default class HomePage extends React.Component {
  containers = React.createRef();

  bindScrollSnap() {
    const element = this.containers.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "90%",
      time: true
    });

    snapElement.bind(callback);
  }

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
    this.bindScrollSnap();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth, windowHeight } = this.state;

    const styles = {
      topBarHeight: 80,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarWidth: windowWidth < 1100 ? 50 : 150,
      sidebarCollapsed: windowWidth < 1100
    };

    const circleStyle = {
      position: "absolute",
      left: windowWidth > 768 ? "20%" : 0,
      top: "30%",
      zIndex: -2
    };

    return (
      <div
        className={"home-container"}
        ref={this.containers}
        style={{
          minHeight: "100vh",
          position: "relative",
          height: windowHeight,
          scrollSnapType: "y proximity",
          overflowY: windowWidth > 768 ? "scroll" : null,
          marginTop: Constants.appbarHeightPadding 
        }}
      >
        <Header styles={styles} />
        <Grid fluid>
            <LandingComponent windowHeight={windowHeight} windowWidth={windowWidth} />
            <AboutMe styles={styles} windowHeight={windowHeight} windowWidth={windowWidth} />
        </Grid>

      </div>
    );
  }
}

/*
<div style={{ overflow: "hidden" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={ImageAssets.personalPhoto}
                    style={{
                      position: "relative",
                      // left: windowWidth > 768 ? "25%" : 0,
                      zIndex: -1
                    }}
                    height={windowHeight - 90}
                  />
                  <CircleBackground
                    width={300}
                    height={300}
                    style={circleStyle}
                  />
                </div>
              </div>
             */
