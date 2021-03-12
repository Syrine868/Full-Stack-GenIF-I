import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={3} sm={3} md={3}>
            <Link to="landing-page" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                 Syrine Jlassi
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
                     <GridItem xs={3} sm={3} md={3}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
                     <GridItem xs={3} sm={3} md={3}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
