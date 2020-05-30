import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Tabs, Container } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { Logo } from "../../assets/logo";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  logo: {
    width: 135,
    height: 43.54
  }
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
          <Grid container>
            <Grid style={{ justifySelf: "flex-start" }} item>
              <Container className={classes.logo}>
                <Logo/>
              </Container>
            </Grid>
            <Grid item>
              <Grid justify={"flex-end"}>
                <Tabs
                  onChange={(e, v) => setValue(v)}
                  value={value}
                  aria-label="Navigation Tabs"
                >
                  <Tab label={"page 1"} />
                  <Tab label={"page 2"} />
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Header;
