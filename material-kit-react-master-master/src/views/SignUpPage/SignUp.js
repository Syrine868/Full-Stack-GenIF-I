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
    DateRange,
    LockOpenOutlined,
    LockOutlined,
    Person,
} from "@material-ui/icons";
import {Checkbox} from "@material-ui/core";

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
        brand="GenIFI"
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
                    <p>If you don t have an account, <br/><b>please complete this form ...</b></p>
                  </CardHeader>
                  <CardBody>

                      <div className={classes.title}>
                            <h3>personal informations</h3>
                          <hr/>
                      </div>
                    <CustomInput
                      labelText="Last name..."
                      id="nom"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="First name..."
                      id="prenom"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <CustomInput
                      labelText="Birth of date"
                      id="date"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <DateRange className={classes.inputIconsColor}>
                              lock_outline
                            </DateRange>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />

                    <div className={classes.title}>
                            <h3>Informations de contact</h3>
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
                      labelText="phone number..."
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "phone",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <div className={classes.title}>
                            <h3>Informations de compte</h3>
                        <hr/>
                    </div>
                      <CustomInput
                      labelText="Username..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password..."
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlined className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Repeat password ..."
                      id="confirmPwd"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlined className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <div className={classes.title}>
                            <h3>Are you an owner ?</h3>
                        <hr/>
                    </div>
                    <Checkbox
                        required
                      id="ownerCheck"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "checkbox",
                      }}
                    /> Propriétaire

                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button round color="primary" size="lg">
                       <LockOpenOutlined className={classes.socialIcons}/> Valider
                    </Button>
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
