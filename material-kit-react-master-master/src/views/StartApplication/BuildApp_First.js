import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Select from 'react-select';
import {groupedOptions } from './data';

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/backgroundLogin.jpg";
import {
    ArrowRightAltOutlined,
    ImageOutlined,
    LockOutlined,
    Person,
    WebOutlined, WebRounded
} from "@material-ui/icons";
const useStyles = makeStyles(styles);

export default function BuildApp_First(props) {

    const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="GenIF'I"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={6} sm={6} md={6}>

              <Card className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <p>Please, complete this form with basics informations of your new website. <br/><b></b></p>
                  </CardHeader>
                  <CardBody>

                    <div className={classes.title}>
                            <h3>Basics Informations</h3>
                        <hr/>
                    </div>
                      <CustomInput
                      labelText="Application name..."
                      id="appname"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <WebOutlined position="end">
                            <Person className={classes.inputIconsColor} />
                          </WebOutlined>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Choose a logo for your application ..."
                      id="logo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "file",
                        endAdornment: (
                          <ImageOutlined position="end">
                            <LockOutlined className={classes.inputIconsColor} />
                          </ImageOutlined>
                        )
                      }}
                    />

                    <label className={classes.labelText}>Application Domain</label>
                      <Select
                        defaultValue="No Domain selected"
                        options={groupedOptions}
                        formatGroupLabel={formatGroupLabel}
                      />
                    <CustomInput
                      labelText="Application description ..."
                      id="descriptionApp"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "textarea",
                        endAdornment: (
                          <WebOutlined position="end">
                            <WebRounded className={classes.inputIconsColor} />
                          </WebOutlined>
                        )
                      }}
                    />
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                      <a className={classes.links} href="/build-app">
                    <Button round color="primary" size="lg">
                       <ArrowRightAltOutlined className={classes.socialIcons}/> Go to next
                    </Button>
                      </a>
                  </CardFooter>
              </Card>

            </GridItem>


          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};