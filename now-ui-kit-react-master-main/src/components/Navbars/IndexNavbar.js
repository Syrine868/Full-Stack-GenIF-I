import React from "react";
import { Link } from "react-scroll";
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
import {
  BiCalendarEvent,
  FaArchive,
  FaHome, FaImages,
  FaInfo, FaLock, FaServicestack, FaUsersCog,
} from "react-icons/all";

import Logo from "assets/img/LogoMedi.png";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("navbar-transparent");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">

            <NavbarBrand
            data-placement="bottom"
            className="pl-5 w-75"
            target="_blank"
          >
              <img src={Logo}  alt=""/>
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
        >
          <Nav navbar>
            <NavItem>
              <Link
                  className="nav-link px-3"
                  data-placement="bottom"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <FaHome/> Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                  className="nav-link"
                  data-placement="bottom"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
               <FaInfo/> About us
              </Link>
            </NavItem>
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
               <FaImages/> Gallery
              </Link>
            </NavItem>
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
               <FaArchive/> Events
              </Link>
            </NavItem>

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
               <FaServicestack/> Services
              </Link>
            </NavItem>
            <NavItem>
              <Link
                  className="nav-link"
                  data-placement="bottom"
              activeClass="active"
              to="trainings"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <BiCalendarEvent/> Trainings
              </Link>
            </NavItem>
            <NavItem>

              <Link
                  className="nav-link"
                  data-placement="bottom"
              activeClass="active"
              to="mainpartners"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <FaUsersCog/> Main Partners
              </Link>
            </NavItem>

             <NavItem>
               <a className="text-white nav-link btn-round btn-lg btn-info" href="/login-page">
                <FaLock/> Login
               </a>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
