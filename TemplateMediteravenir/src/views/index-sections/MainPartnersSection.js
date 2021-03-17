import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MP1 from "assets/img/MP1.png";
import MP2 from "assets/img/MP2.png";
import MP3 from "assets/img/rotary.png";
import MP4 from "assets/img/MP4_1.png";

import {Row, Col, Container} from "reactstrap";

export default function MainPartnersSection() {

    return (
         <>
            <div id="mainpartners" className="section section-buttons">
                    <div className="container">
                        <div className="title">
                        <h1 className="text-md-center text-dark">Main Partners</h1>
                    </div>
                        <Row>
                            <Col className="col-md-3">
                                <img src={MP1} alt="" />
                            </Col>
                            <Col className="col-md-3">
                                <img src={MP2} alt="" />
                            </Col>
                            <Col className="col-md-3">
                                <img src={MP3} alt=""/>
                            </Col>
                            <Col className="col-md-3">
                                <img src={MP4} alt=""/>
                            </Col>
                        </Row>
                    </div>
            </div>
             </>
    );

}