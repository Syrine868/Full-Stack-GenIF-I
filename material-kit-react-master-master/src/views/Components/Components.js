import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionContact from "./Sections/SectionContact";

import bg from "assets/img/ecommerceBg.png";

import styles from "assets/jss/material-kit-react/views/components.js";

import TeamSection from "../LandingPage/Sections/TeamSection";
import SectionService from "./Sections/SectionService";
import Button from "../../components/CustomButtons/Button";
import {OpenInBrowserOutlined} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div id="home">
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        brand="G e n I F ' I"
        changeColorOnScroll={{
          height: 400,
          color:"darkBlue",
        }}
        {...rest}

      />
      <Parallax image={bg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}> G E N I F &apos; I </h1>
                <h3 className={classes.subtitle}>
                    Wellspring your brand with  multipurpose and generic website. <br/>
                    Save time and build it in minutes. ♡
                </h3>
                  <br/>
                   <div className={classes.container}>
          <GridContainer justify="center">
                  <a href="/start-page">
                        <Button color="rose" size="lg"  round>
                            <OpenInBrowserOutlined className={classes.icons}/>Launch your website </Button>
                    </a>
               </GridContainer>
        </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <hr/>
        <TeamSection/>
        <hr/>
        <SectionNavbars/>
        <hr/>
          <SectionService/>
          <hr/>
          <SectionContact/>
      </div>

      <Footer />
    </div>
  );
}
