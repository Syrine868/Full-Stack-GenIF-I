/*eslint-disable*/
import React from "react";
import { Link } from "react-scroll";
import Scroll from "../ScrollToTop/Scroll";
import {

  NavItem,
  Nav,
  Container,
} from "reactstrap";
import {
  BiCalendarEvent,
 
  FaInfo,  FaServicestack
} from "react-icons/all";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul> 
          <NavItem>
              <Link
                  className="nav-link px-3"
                  data-placement="bottom"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <FaInfo/>  About us
              </Link>
            </NavItem>
            <NavItem>
              <Link
                  className="nav-link px-3"
                  data-placement="bottom"
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <FaServicestack/>  Services
              </Link>
            </NavItem>
            <NavItem>
              <Link
                  className="nav-link px-3"
                  data-placement="bottom"
              activeClass="active"
              to="trainings"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               <BiCalendarEvent/>  Trainings
              </Link>
            </NavItem>
          </ul>
        </nav>
      
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed 
         
         
         & Coded by{" "}
          
            Quad Squad
        
          .
        </div>
       <div>
       <Scroll showBelow={250} className="text-md-right"/>
       </div>

      </Container>
    </footer>
  );
}

export default DarkFooter;
