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
// react plugin used to create switch buttons
// plugin that creates slider

// reactstrap components
import {
    Container,
    Row,
    Card, CardHeader, CardBody, CardFooter,
} from "reactstrap";

import E from "assets/img/Eventt.gif";

import {BiRightArrow, GoArrowRight} from "react-icons/all";


function SectionEvents() {

    return (
        <>
            <div id="events" className="section section-buttons">
                <Container>
                    <div className="title">
                        <h1 className="text-md-center text-dark">Events</h1>
                    </div>

                    <Row>
                        <div className="col-5">
                            <Card>
                                <img src={E}/>
                            </Card>
                        </div>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Event Title : Les Fondements du Reiki 2. Formation Certifiée</h4>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiRightArrow/> Coach : Sameh Cherigui
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiRightArrow/> Event Date : 10/03/2021
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiRightArrow/> Place : Healing Energy Reiki Usui - Nasr
                                    </h6>
                                </CardBody>
                                <CardFooter>
                                    <a href="#">
                                        <button className="btn btn-outline-primary"><GoArrowRight/> participate</button>
                                    </a>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Event Title : Formation Reiki Usui 1 degré: La voie de l'harmonie</h4>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiRightArrow/> Coach : Sameh Cherigui
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiRightArrow/> Event Date : 10/03/2021
                                    </h6>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        <BiRightArrow/> Place : Healing Energy Reiki Usui - Avenue Hédi Nouira - Tunis
                                    </h6>
                                </CardBody>
                                <CardFooter>
                                    <a href="#">
                                        <button className="btn btn-outline-primary"><GoArrowRight/> participate</button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionEvents;
