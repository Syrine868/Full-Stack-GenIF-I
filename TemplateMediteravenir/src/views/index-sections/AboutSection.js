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
     Card, CardHeader, CardBody,
} from "reactstrap";

import {BiRightArrow, GrNote} from "react-icons/all";
import AboutImg from "assets/img/AboutImg.png";

function AboutSection() {

  return (
    <>
      <div id="about" className="section section-buttons">
        <Container>
          <div className="title">
            <h1 className="text-md-center text-dark">About us</h1>
          </div>

          <Row className="mr-4">
              <div className="col-6">
                  <Card className="mx-5 my-5">
                      <CardHeader>
                          <h3 className="text-dark my-3">
                              <BiRightArrow/> Méditerravenir ? </h3>
                      </CardHeader>
                      <CardBody>
                       <BiRightArrow/> Mediterranean and the future: The 2 reasons for the creation of
                      'Méditerravenir' are directly mentioned in our name. Created in 2006 in France, and in 2012 in Tunisia, (new Méditerravenir creations are planned).     <br/>
                        <GrNote/>   Méditerravenir is now present on both shores of the Mediterranean. <br/>
                          <GrNote/> Méditerravenir is a mediator who deploys an educational and information approach: the association promotes studies and experiences leading to progress in the dialogue between the South and the North of the Mediterranean.
                      </CardBody>
                     </Card>
              </div>
              <div className="col-5 mx-4 my-5">

                    <img src={AboutImg} alt=""/>

              </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutSection;
