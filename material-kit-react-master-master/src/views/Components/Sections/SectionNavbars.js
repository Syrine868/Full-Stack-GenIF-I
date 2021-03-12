import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import {ArrowRightAltOutlined} from "@material-ui/icons";

import CommerceLogo from"assets/img/commerce.png";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
    const classes = useStyles();
    return (
        <div className={classes.section}>

            <div className={classes.container}>
                <h2 className={classes.title}>Launch your products</h2>
                <GridContainer>
                    <GridItem xs={7} sm={7} md={7}>
                        <div className={classes.title}>
                            <h3>What we offer</h3>
                        </div>
                        <CustomTabs
                            color="info"
                            tabs={[
                                {


                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Through our app, you can create and configure
                                            your own application in the domain that interests you
                                            with an ergonomic design and rich, generic elements.
                                            <br/>
                                            <b>To start your activity, just click on the button here
                                                below.</b>
                                            <br/>
                                            <ListItem className={classes.listItem}>

                                                <a href="/">
                                                    <Button color="rose" round>
                                                        <ArrowRightAltOutlined className={classes.icons}/>Start</Button>
                                                </a>
                                            </ListItem>
                                        </p>

                                    ),

                                },

                            ]}
                        />
                    </GridItem>
                    <GridItem xs={5} sm={5} md={5}>
                            <img src={CommerceLogo} alt="Products GenIF'I "/>
                    </GridItem>
                </GridContainer>
            </div>

        </div>
    );
}
