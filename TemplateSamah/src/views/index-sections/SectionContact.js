/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import {FiSend} from "react-icons/all";
import Scroll from "../../components/ScrollToTop/Scroll";

// core components

function SectionContact() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg2.jpg") + ")",
        }}
      >
        <Container>
             <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
          <Row>

            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Contact Us</h3>
                <Form className="register-form">
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Message</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">

                        <Input placeholder="Message" type="textarea" rows="5" cols="60" />
                    </InputGroupAddon>
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="rose"
                    type="button"
                  >
                    <FiSend/> Send
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>{" "}
    </>
  );
}

export default SectionContact;
