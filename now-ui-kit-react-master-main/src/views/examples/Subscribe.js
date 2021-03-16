import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { FaCalendar, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import LoginIcon from "assets/img/Login.png";
import { BiCalendar, BiEnvelope, BiLock, BiLockOpen, BiUser } from "react-icons/bi";
import Row from "reactstrap/lib/Row";
import { GiWorld } from "react-icons/gi";
function Subscribe() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            
            <Row>
            <Col className="md-12">
            <Card className=" card-body card-plain bg-transparent">
                <Form action="" className="form text-white" method="">

                  <CardBody>

                      <h3 className="subtitle">Subscribe</h3>
                
                <Row>
                <h4 className="subtitle">Basics informations</h4>
                </Row>
                <Row>
                  
                <Col className="pr-md-1 " md="6">
                    <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="First name ..."
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                        ></Input>
                      </InputGroup>
                  </Col>
                  <Col className="pr-md-1 " md="6">
                  <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last name ..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  </Col>
                  <Col className="pr-md-1 " md="6">

                  <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <BiCalendar/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="date"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  </Col>
                  <Col className="pr-md-1 " md="6">
                  <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <GiWorld/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <select className="form-control"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        >
                          <option selected disabled defaultValue="No item selected"> No Country Selected</option>
                          <option className="text-dark">Tunisia</option>
                          <option className="text-dark">Algeria</option>
                          <option className="text-dark">Morroco</option>
                          <option className="text-dark">Liby</option>
                          <option className="text-dark">Spain</option>
                          <option className="text-dark">French</option>
                          <option className="text-dark">Italy</option>
                          <option className="text-dark">Portuges</option>
                      </select>
                    </InputGroup>
                  </Col>
                </Row>

                <Row>
                <h4 className="subtitle">Contact informations</h4>
                </Row>
                <Row>
                <Col className="pr-md-1 " md="6">
                <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <BiEnvelope/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="exemple123@gmail.com ..."
                      type="email"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  </Col>
                  <Col className="pr-md-1 " md="6">
                  <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone number ..."
                      type="text"
                      pattern="[1-9][0-9]{8}"
                      maxLength="8"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  </Col>
                </Row>
                <Row>
                <h4 className="subtitle">Account informations</h4>
                </Row>
                 <Row>
                 <Col className="pr-md-1 " md="12">
                 <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <BiUser/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username ..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  </Col>
                  <Col className="pr-md-1 " md="6">
                  <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                            <BiLock/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password ..."
                      type="password"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                    </Col>
                    <Col className="pr-md-1 " md="6">
                    <InputGroup
                    className={
                      "no-border input-lg" +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <BiLock/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Repeat your password ..."
                      type="password"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                    </Col>
                    
                 </Row>
               
                
                 
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                     <BiLockOpen/> Register
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
            </Row>

             
           
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Subscribe;
