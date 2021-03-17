import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function ContactSection() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-left">
            <Col className="text-left" lg="8" md="12">
              <div className="title">
                  <h1 className="text-md-left text-light">Contact us</h1>
              </div>
            </Col>
            <Col className="text-left" lg="8" md="12">
              <form className="form-group col-md-5">
                  <label htmlFor="emailAddress" className="small">Email Address</label>
                  <input type="text" className="form-control" placeholder="example@gmail.com" name="em_addr"/>
                  <br/>
                  <label htmlFor="Message" className="small">Message</label>
                  <textarea  className="form-control" placeholder="enter your message ..." name="em_addr"/>
              </form>
            </Col>
          </Row>
          <br/>

          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/MediterravenirTunisie"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactSection;
