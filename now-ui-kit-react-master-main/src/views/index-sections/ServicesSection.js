import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
 import LD from "assets/img/lasting-durable.png"
import YC from "assets/img/you-can.png";
import AH from "assets/img/autonomy-header.png";
import PM from "assets/img/project-management.png";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs" id="services">
        <Container>
          <Row>
           
            <Col className="ml-auto mr-auto" md="10" xl="9">
            <h1 className="text-md-center text-dark">Services</h1>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="black"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        lasting impact
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Respect and confidence
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Autonomy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        transparency
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                     <Card>
                         <Row>
                             <Col className="col-md-3 ml-5">
                                <img src={LD} alt="lasting durable" />
                             </Col>
                             <Col className="col-md-6 ml-2 text-md-left my-4">
                              <h4 className="subtitle"> The actions planned on the ground.</h4>
                             </Col>

                         </Row>
                     </Card>
                    </TabPane>
                    <TabPane tabId="pills2">
                    <Card>
                         <Row>
                             <Col className="col-md-3 ml-5">
                                <img src={YC} alt="lasting durable" />
                             </Col>
                             <Col className="col-md-6 ml-2 text-md-left my-2">
                              <h4 className="subtitle"> Between North and South, but also with each of those
involved in our actions</h4>
                             </Col>

                         </Row>
                     </Card>
                    </TabPane>
                    <TabPane tabId="pills3">
                    <Card>
                         <Row>
                             <Col className="col-md-3 ml-5 my-5">
                                <img src={AH} alt="lasting durable" />
                             </Col>
                             <Col className="col-md-6 ml-2 text-md-left my-2">
                              <h4 className="subtitle"> For Project leaders but also that which allows
                                              Think about carrying out actions in a political and societal context </h4>
                             </Col>

                         </Row>
                     </Card>
                    </TabPane>
                    <TabPane tabId="pills4">
                    <Card>
                         <Row>
                             <Col className="col-md-3 ml-5">
                                <img src={PM} alt="lasting durable" />
                             </Col>
                             <Col className="col-md-6 ml-2 text-md-left my-4">
                              <h4 className="subtitle"> In project management.</h4>
                             </Col>

                         </Row>
                     </Card>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
