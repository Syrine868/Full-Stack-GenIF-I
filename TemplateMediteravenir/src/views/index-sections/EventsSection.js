
import React from "react";
import {
    Container,
    Row,
    Card, CardBody,
} from "reactstrap";

import {
    AiOutlineCalendar, AiOutlineFieldTime,  BiCalendarAlt, BiDetail,
    FaHotel,
    FaUsers,
    MdEvent,
} from "react-icons/all";
import E1 from "assets/img/Event1.jpg";
import E2 from "assets/img/Event2.png";
function SectionEvents() {

    return (
        <>
            <div id="events" className="section section-buttons">
                <Container>
                    <div className="title">
                        <h1 className="text-md-center text-dark">Events</h1>
                    </div>

                    <Row>
                        <div className="col-3">
                            <Row>
                                <Card>
                                    <img src={E1} alt=""/>
                                </Card>
                            </Row>

                        </div>
                        <div className="col-7">

                                <Card>
                                <CardBody className="bg-light">
                                    <h5>Event Informations</h5>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <MdEvent/> Event Title : ....
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <FaUsers/> Collaborators : ....
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <AiOutlineCalendar/> Event Date : ...
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <FaHotel/> Place : ...
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiDetail/>  Description : ...
                                    </h6>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-2">
                            <Card>

                                <CardBody className="bg-light">
                                      <h5>Event Date</h5>
                                    <BiCalendarAlt/> From  : ... <br/>

                                    <AiOutlineFieldTime/> At : ...
                                </CardBody>
                            </Card>

                            </div>

                    </Row>
                    <Row>
                        <div className="col-3">
                            <Row>
                                <Card>
                                    <img src={E2} alt=""/>
                                </Card>
                            </Row>

                        </div>
                        <div className="col-7">

                                <Card>
                                <CardBody className="bg-light">
                                    <h5>Event Informations</h5>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <MdEvent/> Event Title : ....
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <FaUsers/> Collaborators : ....
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <AiOutlineCalendar/> Event Date : ...
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <FaHotel/> Place : ...
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiDetail/>  Description : ...
                                    </h6>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-2">
                            <Card>

                                <CardBody className="bg-light">
                                      <h5>Event Date</h5>
                                    <BiCalendarAlt/> From  : ... <br/>

                                    <AiOutlineFieldTime/> At : ...
                                </CardBody>
                            </Card>

                            </div>

                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionEvents;
