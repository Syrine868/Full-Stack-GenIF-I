import React from "react";
//, , email, date naissance , tel , pays , sex , username, pwd , cpwd
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import {AiOutlineSend, BiQuestionMark, GiConfirmed, GoQuestion} from "react-icons/all";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container className="container-fluid">
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <div className="social-line text-center">
                  <h3 className="title mx-auto">Subscribe</h3>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                </div>
                <Form className="register-form">
                  <fieldset>
                    <h3>Gender information</h3>
                      <hr/>
                      <p className="text-md-left">
                       <GoQuestion/> choose your gender
                      </p>
                      <div className="custom-control custom-checkbox checkbox-lg">
                          <input type="checkbox" className="custom-control-input" id="checkbox-2"/>
                          <label className="custom-control-label" htmlFor="checkbox-2">Man</label>
                      </div>
                      <div className="custom-control custom-checkbox checkbox-lg">
                          <input type="checkbox" className="custom-control-input" id="checkbox-3"/>
                          <label className="custom-control-label" htmlFor="checkbox-3">Women</label>
                      </div>

                     <Button block className="btn-round" color="info">
                      <GiConfirmed/>  Validate
                  </Button>
                  </fieldset>

                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    If you have an account, Just logged in
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Quad Squad
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
