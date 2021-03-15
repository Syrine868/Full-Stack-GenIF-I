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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, NavItem } from "reactstrap";
import Scroll from "../ScrollToTop/Scroll";
import {Link} from "react-scroll";
function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
              <NavItem>

                  <Link
                      className="nav-link"
                      data-placement="bottom"
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                    Gallery
                  </Link>
                </NavItem>
              </li>
              <li>
              <NavItem>

                <Link
                    className="nav-link"
                    data-placement="bottom"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                  Services
                </Link>
                </NavItem>
              </li>
              <li>
              <NavItem>
              <Link
                  className="nav-link"
                  data-placement="bottom"
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                Events
              </Link>
              </NavItem>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Quad Squad

            </span>

          </div>
          <Scroll showBelow={250}/>


        </Row>
      </Container>

    </footer>
  );
}

export default DemoFooter;
