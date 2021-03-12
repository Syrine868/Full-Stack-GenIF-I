import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

function Login() {
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Login</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="5">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input


                                                    placeholder="Username..."
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="3">
                                            <FormGroup>
                                                <label>Password</label>
                                                <Input
                                                    defaultValue="michael23"
                                                    placeholder="Passowrd..."
                                                    type="password"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="primary" type="submit">
                                    Login
                                </Button>
                            </CardFooter>
                        </Card>

                    </Col></Row>
            </div>
        </>
    );
}

export default Login;
