import React from "react";
//, , email,  , tel ,  ,  , username, pwd , cpwd
// reactstrap components
import { Button, Card,CardHeader, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import {AiOutlineSend, GiConfirmed} from "react-icons/all";
import Image from "assets/img/images.png";

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
            <Col className="ml-auto mr-auto " lg="4">
              <Card className="card-register">
                <div className=" text-center">
                  <img src={Image} className="img-circle"/>

                </div>
                <Form className="register-form">
                  <fieldset>
                    <h3>Account informations</h3>
                    <hr />
                    <label>username</label>
                    <Input placeholder="Enter your username" type="text" />
                    <label>Password</label>
                    <Input placeholder="Enter your password" type="password" />
                    <label>Confirm Password</label>
                    <Input placeholder="Confirm your password" type="password" />
                    <a href="/register-gender-page">
                      <Button block className="btn-round" color="info">
                        <GiConfirmed/> Validate
                      </Button>
                    </a>
                  </fieldset>
                </Form>
                <div className="forgot">
                   <Button
                    className="btn-neutral btn-just-icon"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
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
