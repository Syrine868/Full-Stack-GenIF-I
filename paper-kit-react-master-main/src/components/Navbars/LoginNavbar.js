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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import {
  BiArrowBack,
  BiCalendarEvent,
  FaArchive, FaCalendar,
  FaHome,
  FaInfo, FaLock, FaServicestack,
  FcAbout,
  FcGallery,
  GrCircleInformation,
  IoInformationCircle,
  IoInformationOutline
} from "react-icons/all";

function LoginNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 100 ||
        document.body.scrollTop > 100
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Samah cherigui
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
          hidden={true}
        >
          <Nav navbar>
            <NavItem hidden={true}>
              <NavLink
                data-placement="bottom"
              >
                <p className="d-lg-none"> Home</p>
                <FaHome/> Home
              </NavLink>
            </NavItem>
            <NavItem hidden={true}>
              <NavLink
                data-placement="bottom"
              >
                <p className="d-lg-none">About us</p>
                <FaInfo/> About us
              </NavLink>
            </NavItem>
                        <NavItem hidden={true}>
              <NavLink
                data-placement="bottom"
              >
                <p className="d-lg-none"/>
                <FaArchive/> Our Gallery
              </NavLink>
            </NavItem>
            <NavItem hidden={true}>
              <NavLink
                data-placement="bottom"
              >
                <p className="d-lg-none">Services</p>
                <FaServicestack/> Services
              </NavLink>
            </NavItem>
            <NavItem hidden={true}>
              <NavLink
                data-placement="bottom"
              >
                <p className="d-lg-none">Events</p>
                <BiCalendarEvent/> Events
              </NavLink>
            </NavItem>
            <NavItem hidden={true}>
              <NavLink
                target="_blank"
              >
                <FaCalendar/> Calendar
              </NavLink>
            </NavItem>
            <NavItem>
              <a href="/">
              <Button
                className="btn-round"
                color="primary"
              >
                <BiArrowBack/> Back To Home
              </Button>
                </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default LoginNavbar;
