import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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



import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/backgroundLogin.jpg";
import {
    ArrowRightAltOutlined,
    Phone,

} from "@material-ui/icons";
const useStyles = makeStyles(styles);

export default function SignUp(props) {
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
                    <p>Please, complete this form with your contact informations<br/><b></b></p>
                  </CardHeader>
                  <CardBody>

                    <div className={classes.title}>
                            <h3>Contact Informations</h3>
                        <hr/>
                    </div>
                      <CustomInput
                      labelText="Email address..."
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
                      labelText="Phone number..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "phone",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                      <a className={classes.links} href="/account-info-page">
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
