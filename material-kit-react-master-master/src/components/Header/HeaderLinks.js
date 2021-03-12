/*eslint-disable*/
import React, {useState, useRef, useEffect} from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
    HomeRounded,
    InfoRounded,
    ShoppingCart,
    Group,
    LockOutlined, PeopleAltOutlined, OpenInBrowserOutlined
} from "@material-ui/icons";

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {Link} from "react-scroll";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();

        return (

            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Link
                        data-placement="bottom"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                         className={classes.navLink}>
                        <HomeRounded className={classes.icons}/> Home
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Link
                        data-placement="bottom"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                         className={classes.navLink}>
                        <InfoRounded className={classes.icons}/> About us
                    </Link>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <Link
                        data-placement="bottom"
                        activeClass="active"
                        to="team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                         className={classes.navLink}>
                        <PeopleAltOutlined className={classes.icons}/> Team
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <a href="#" className={classes.navLink}>
                        <OpenInBrowserOutlined className={classes.icons}/> Templates
                    </a>
                </ListItem>

                   <ListItem className={classes.listItem}>
                       <Link
                        data-placement="bottom"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                         className={classes.navLink}>
                        <Group className={classes.icons}/> Contact
                    </Link>
                </ListItem>
                <ListItem className={classes.listItem}>

                    <a href="/login-page">
                        <Button color="info" round>
                            <LockOutlined className={classes.icons}/>Login</Button>
                    </a>
                </ListItem>

            </List>
        );
    }

