import React from "react";
import { Link } from "react-scroll";
import classnames from "classnames";
import Switch from "react-bootstrap-switch";
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
              href="/"
            
              id="navbar-brand"
            >
              <img src={Logo} alt="Mediterravenir"/>
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
            <ul>
              <li
                  className="nav-link px-3"
              >
               <FaHome/> Home
              </li>
            </ul>
           <li className="nav-link px-3">
               Trainings
           </li>
            <li className="nav-link px-3">
                Events
            </li>
            <li className="nav-link px-3">
              News
            </li>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             

             <NavItem>
               <a className="text-white nav-link btn-round btn-lg btn-info" href="/login-page">
                <FaLock/> Login
               </a>
            </NavItem>

            <NavItem className="my-2 px-3 mx-4">
              <Switch  offColor="" offText="Fr" onColor="primary" onText="En" ></Switch>
          
            </NavItem>
          

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
