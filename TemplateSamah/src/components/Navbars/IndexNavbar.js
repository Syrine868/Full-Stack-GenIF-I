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
import Switch from "react-bootstrap-switch";

import {
  BiCalendarEvent,
  FaArchive, FaCalendar,
  FaHome,
  FaInfo, FaLock, FaServicestack,
} from "react-icons/all";
import Logo from "assets/img/Logo1.png";
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
function IndexNavbar() {
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

 // const{t,i18n} = useTranslation('common');
/*  const changeLanguage = (ln)=> {
    return ()=> {
      i18n.changeLanguage(ln);
      console.log('Language changed to '+ln);
    }
  }*/
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">

            <NavbarBrand
            data-placement="bottom"
            className="pl-5"
            target="_blank"
            title="Coded by Creative Tim"
          >
             <img src={Logo}/>
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
               <FaArchive/> Gallery
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
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <BiCalendarEvent/> Events
              </Link>
            </NavItem>
            <NavItem>

              <Link
                  className="nav-link"
                  data-placement="bottom"
              activeClass="active"
              to="calendar"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <FaCalendar/> Calendar
              </Link>
            </NavItem>

             <NavItem>
               <a className="text-white nav-link btn btn-lg btn-round btn-rose" href="/login-page">
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
