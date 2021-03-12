import React from "react";
// plugin that creates slider
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import People from "@material-ui/icons/People";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import image from "assets/img/LOGO QUAD.png";
import {StarBorderOutlined} from "@material-ui/icons";
const useStyles = makeStyles(styles);

export default function SectionBasics() {
    const classes = useStyles();


    return (
<div id="about" className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={7} sm={7} md={7}>
            <h2 className={classes.title}>About us</h2>
                <br/>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Quad Squad",
                    tabIcon: People,
                    tabContent: (
                      <p className={classes.textCenter}>
                            <b>Quad Squad</b> is a team of four people,
                          intended to develop applications using recent technologies.
                      </p>
                    )
                  },
                  {
                    tabName: "Mission",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                          Our goal is to put pre-existing templates for our customers
                          in order to exploit it in their domain after having introduced their content
                          without having written any code but by choosing and moving the elements that
                          fits better.
                      </p>
                    )
                  },
                  {
                    tabName: "Goals",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>

                          <StarBorderOutlined className={classes.icon}/>Ergonomic Design.
                          <br/>
                        <StarBorderOutlined className={classes.icon}/>
                          Flexible and configurable elements.
                          <br/>
                        <StarBorderOutlined className={classes.icon}/>
                          Give the possibility to the owner of the site to manipulate these elements.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
                <br/>
                <img src={image} alt="About Quad Squad "/>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    );
}
