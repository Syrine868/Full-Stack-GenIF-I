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
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
    Container,
    Row,
    Col, Card, CardHeader,
} from "reactstrap";

import Soleil from "assets/img/jdida.png";
import {AiOutlineArrowUp, AiOutlineInsertRowRight, GiBowArrow} from "react-icons/all";

function SectionAboutUs() {

  return (
    <>
      <div id="about" className="section section-buttons">
        <Container>
          <div className="title">
            <h1 className="text-md-center text-dark">About us</h1>
          </div>

          <Row>
              <div className="col-6">
                  <Card className="mx-5 my-5">
                      <CardHeader>
                          <h3 className="text-dark">
                              <GiBowArrow/> Our Mission</h3>
                      </CardHeader>
                  <h6 className="text-justify text-dark line-height mx-3 my-3">
                      Un coach en développement personnel et professionnel est un expert qui fournit
                      des conseils <br/> personnalisés et des mesures de suivi à une personne de manière à
                      répondre à ses besoins personnels et professionnels  en fonction d'objectifs précis. <br/>
                  </h6>
                      </Card>
              </div>
              <div className="col-6">
                  <Card>
                  <img src={Soleil}/>
                  </Card>
              </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;
