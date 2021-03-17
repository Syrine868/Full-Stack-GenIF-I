import React from "react";

import {
    Container,
    Row,
    Card,CardBody,
} from "reactstrap";

import I1 from "assets/img/Ga1_Fev_2020.png";
import I6 from "assets/img/Ga6_fev_2020.png";
import I2 from "assets/img/Ga7_novembre_2019.png";
import I3 from "assets/img/Ga8_mai_2019.png";
import I4 from "assets/img/Ga3_mai_2019.png";
import I5 from "assets/img/Ga4_mai_2019.png";
import I7 from "assets/img/Ga2_mai_2019.png";
import I8 from "assets/img/Ga5_avril_2017.png";


function GallerySection() {

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
                                <img src={I1} alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I6}  alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I2}  alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>

                                <img src={I3}  alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-3">
                            <Card>
                                <img src={I4}  alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I5}  alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I7} alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3">
                            <Card>
                                <img src={I8} alt=""/>
                                <CardBody>
                                    <Row>
                                        <h6 className="card-title col-12">Image Title</h6>
                                        <h6 className="col-12">Place : ...</h6>
                                        <h6 className="col-12">Date : ...</h6>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default GallerySection;
