import React from "react";
import Header from "../components/appbar/appbar.component";
import ImageAssets from "../assets/image-assets";
import { CircleBackground } from "../assets/images/circle-background";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
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
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarWidth: windowWidth < 1100 ? 50 : 150,
      sidebarCollapsed: windowWidth < 1100
    };

    const circleStyle = {
      position: "absolute",
      left: windowWidth > 768 ? "50%" : 0,
      top: "30%",
      zIndex: -2,
      // marginTop: 100

    }

    return (
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          height: windowHeight, overflow: "hidden"
        }}
      >
        <Header styles={styles} />
        <div style={{ marginTop: 90}}>
          <img
            src={ImageAssets.personalPhoto}
            style={{
              position: "relative",
              left: windowWidth > 768 ? "25%" : 0,
              zIndex: -1
            }}
            height={windowHeight}
          />
            <CircleBackground width={300} height={300} style={circleStyle} />
        </div>
      </div>
    );
  }
}
