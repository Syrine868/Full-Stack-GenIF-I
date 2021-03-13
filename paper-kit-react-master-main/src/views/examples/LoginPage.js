import React from "react";
// reactstrap components
import { Button, Card,CardHeader, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import {AiOutlineLogin, FaLockOpen, FiLogIn, GiConfirmed, GrLogin} from "react-icons/all";
import Image from "assets/img/images.png";
import LoginNavbar from "../../components/Navbars/LoginNavbar";

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
      <LoginNavbar />

      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
        }}
      >

        <div className="filter" />

        <Container className="container-fluid">
          <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
          <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
          <Row>
            <Col className="ml-auto mr-auto " lg="4">
              <Card className="card-register">
                <div className=" text-center">

                  <img src={Image} className="img-circle"/>
                  <br/>

                </div>
                <Form className="register-form">
                  <fieldset>
                    <label>Username</label>
                    <Input placeholder="Enter your username" type="text" />
                    <label>Password</label>
                    <Input placeholder="Enter your password" type="password" />
                    <a href="/register-gender-page">
                      <Button block className="btn-round" color="info">
                        <AiOutlineLogin/> Login
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
                    <hr/>
                   <a href="/register-page">
                     <Button block round color="danger"><FaLockOpen/> Register</Button>
                   </a>
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
