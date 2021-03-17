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
    Card, CardHeader, CardFooter,
} from "reactstrap";

import I1 from "assets/img/I1.png";
import I2 from "assets/img/I2.png";
import I3 from "assets/img/I3.png";
import I4 from "assets/img/I5.jpg";
import I5 from "assets/img/I5.png";
import I6 from "assets/img/I6.jfif";
import I7 from "assets/img/I7.jfif";
import I8 from "assets/img/I9.png";


function SectionGallery() {

    return (
        <>
            <div id="gallery" className="section section-buttons">
                <Container>
                    <div className="title">
                        <h1 className="text-md-center text-dark">Our Gallery</h1>
                    </div>

                    <Row>
                        <div className="col-3">
                            <Card>
                                <img src={I1} className="h-25"/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I2} className="h-25"/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I3} className="h-25"/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>

                                <img src={I4} className="h-25"/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-3">
                            <Card>
                                <img src={I5} className="h-25"/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I6} className="h-25"/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I7}/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I8}/>
                                <CardFooter>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionGallery;
