import React from "react";
// reactstrap components
import {Card, CardHeader, Form, Row, Col, FormGroup, CardBody, CardFooter, Button} from "reactstrap";
// core components
import LoginNavbar from "../../components/Navbars/LoginNavbar";
import {FaUser, GiConfirmed} from "react-icons/all";
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
            <LoginNavbar/>
            <div
                className="page-header"
                style={{
                    backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
                }}
            >
                <br/>
                <br/>
                <div className="filter"/>
                <div className="container">
                    <Row>
                        <Col className="md-8">

                            <Card>
                                <CardHeader className="bg-card-header">
                                    <div className=" text-center">

                                        <img src={Image} className="img-circle"/>
                                    </div>
                                </CardHeader>
                                <CardBody className="bg-card-body">
                                    <Form className="register-form">
                                        <h5 className="subtitle text-light">Basics informations</h5>
                                        <hr/>
                                        <Row>
                                            <Col className="pr-md-1 " md="6">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        First name
                                                    </label>
                                                    <br/>
                                                    <input className="form-control" type="text"
                                                           placeholder="first name ..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1 " md="6">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Last name
                                                    </label>
                                                    <br/>
                                                    <input className="form-control" type="text"
                                                           placeholder="Last name ..."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1 " md="6">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Date of birth
                                                    </label>
                                                    <br/>
                                                    <input className="form-control" type="date"/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Country
                                                    </label>
                                                    <br/>
                                                    <input placeholder="Country" className="form-control" type="text"/>
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <h5 className="subtitle text-light">Contact informations</h5>
                                        <hr/>
                                        <Row>

                                            <Col className="pr-md-1 " md="6">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Email Address
                                                    </label>
                                                    <input className="form-control" type="text"
                                                           placeholder="exemple@gmail.com ..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1 " md="6">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Phone number
                                                    </label>
                                                    <input className="form-control" type="text"
                                                           placeholder="Phone number ..."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <h5 className="subtitle text-light">Account informations</h5>
                                        <hr/>
                                        <Row>

                                            <Col className="px-md-1 " md="4">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Username
                                                    </label>
                                                    <input className="form-control" type="text"
                                                           placeholder="Username ..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1 " md="4">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Password
                                                    </label>
                                                    <input className="form-control" type="password"
                                                           placeholder="Password ..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-0 " md="4">
                                                <FormGroup>
                                                    <label htmlFor="" className="text-light">
                                                        Confirm Password
                                                    </label>
                                                    <input className="form-control" type="password"
                                                           placeholder="Confirm password ..."/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-lg-12 " md="12">
                                                <a href="#">
                                                    <Button block className="btn-round" color="info">
                                                        <GiConfirmed/>Validate
                                                    </Button>
                                                </a>

                                            </Col>
                                        </Row>

                                    </Form>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>

        </>
    );
}

export default RegisterPage;
