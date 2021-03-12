import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import {MessageRounded, SendRounded} from "@material-ui/icons";
import MapContainer from "../../../components/Map/MapContainer";
const useStyles = makeStyles(styles);

export default function SectionContact() {


  const classes = useStyles();
  return (
    <div id="contact" className={classes.section}>

      <div className={classes.container}>
  <h2 className={classes.title}>Contact us</h2>
        <br/>
        <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={6}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>For more information, please fill out the form.</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="First name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                   <CustomInput
                    labelText="Last name..."
                    id="last"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email Address..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />

                  <CustomInput
                      labelText="Write your message ..."
                    id="msg"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "textarea",
                        endAdornment: (
                        <InputAdornment position="end">
                          <MessageRounded className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  >

                  </CustomInput>

                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button round color="primary">
                    <SendRounded className={classes.icons} /> Send
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>

        <GridItem xs={5} sm={5} md={5}>
            <MapContainer/>
        </GridItem>

        </GridContainer>

      </div>
    </div>
  );
}
