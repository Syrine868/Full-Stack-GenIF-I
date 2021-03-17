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
    Card, CardHeader, CardFooter, CardBody,
} from "reactstrap";

import S1 from "assets/img/S1.png";
import S2 from "assets/img/S2.png";
import S3 from "assets/img/YogaRire.png";
import S4 from "assets/img/S4.png";
import S5 from "assets/img/S5.png";
import S6 from "assets/img/S6.png";
import S7 from "assets/img/S7.jpg";
import S8 from "assets/img/S8.jpg";
import {FaLocationArrow} from "react-icons/all";


function SectionGallery() {

    return (
        <>
            <div id="services" className="section section-buttons">
                <Container>
                    <div className="title">
                        <h1 className="text-md-center text-dark">Our Services</h1>
                    </div>

                    <Row>
                        <div className="col-5">
                            <Card>
                                <img src={S1} className="h-25"/>
                            </Card>
                        </div>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h2 className="card-title">Life coaching</h2>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                    Life coaching deals with the situations and problems in your day-to-day life.
                                    It affects your self-confidence, your self-image, the meaning of your life, realizing what you have inside yourself, improving your relationships, preparing for an exam ...
                                    Professionally, this can concern the search for a job, a change of position, managing others ethically, speaking in public, being satisfied with oneself.
                                    </h6>
                                    </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h2 className="card-title">Reiki treatments</h2>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                    An energetic work session includes: <br/>
                                    - a short discussion phase to determine the subject you want to work on,
                                      explore the issues, what you need, what you want ... <br/>
                                    - Then comes the energy treatment which is done lying down or sitting down. <br/>
                                    - Finally a time to comment on your feelings during the treatment.
                                    </h6>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-5">
                            <Card>
                                <img src={S8} className="h-25"/>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-5">
                            <Card>
                                <img src={S3} className="h-25"/>
                            </Card>
                        </div>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h2 className="card-title">Laughter Yoga</h2>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                    Laughing is good for your health. Laughter yoga uses laughter to benefit from its benefits: on stress,
                                    pain, but also sleep.
                                    The session includes several exercises:
                                        <br/>
                                    <FaLocationArrow/> Stretching, warm-ups;
                                        <br/>
                                    <FaLocationArrow/> breathing; <br/>
                                    <FaLocationArrow/> meditation; <br/>
                                    <FaLocationArrow/> moments of free laughter; <br/>
                                    but also fun exercises to easily trigger laughter.
                                        </h6>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h2 className="card-title">Dance therapy</h2>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                    A dance therapy session takes place individually or in a group, in a place that looks more like a dance studio than a therapist's office. At the first meeting, the therapist seeks to define the motives and objectives of the process, then he continues with dance and movement. Movements may or may not be improvised and vary depending on the style of the therapist. Music is not always present; in a group, it can be a unifying element, but silence favors the search for rhythm in oneself.

                                    </h6>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-5">
                            <Card>
                                <img src={S4} className="h-25"/>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-5">
                            <Card>
                                <img src={S7} className="h-25"/>
                            </Card>
                        </div>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h2 className="card-title">Lithotherapy</h2>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        IT IS BASED ON THE IDEA THAT STONES AND MINERALS HAVE THERAPEUTIC BENEFITS.
                                        ACCORDING TO THE PRINCIPLE OF LITHOTHERAPY, THEY EMIT VIBRATIONS,
                                        IT WILL HAVE A RESONANCE CAPABLE OF ACTING ON THE BODY TO IMPROVE
                                        THE WELL-BEING OF THE PERSON IN CONTACT WITH IT, OR AT LEAST NEAR IT.
                                        ARRANGED ON THE BODY, THE STONES ALLOW TO REGENERATE AND REBALANCE THE WHOLE
                                        BEING: IT IS AS MUCH PHYSICAL AS THE PSYCHIC.

                                    </h6>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-7">
                            <Card>
                                <CardHeader>
                                    <h2 className="card-title">Reflexology</h2>
                                </CardHeader>
                                <CardBody>
                                    <h6 className="text-dark justify-content-lg-between justify-content-lg-end">
                                        Reflexology is practiced by a reflexologist who is a professional
                                        in relieving tension through pressure techniques.
                                        It promotes relaxation, prevents stress and stimulates self-regulatory
                                        functions thanks to a specific touch of so-called reflex zones in the feet or hands.

                                    </h6>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-5">
                            <Card>
                                <img src={S6} className="h-25"/>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionGallery;
