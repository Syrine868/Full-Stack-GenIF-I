import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import AboutSection from "./index-sections/AboutSection";
import GallerySection from "./index-sections/GallerySection";
import EventsSection from "./index-sections/EventsSection";
import MainPartnersSection from "./index-sections/MainPartnersSection";
import ContactSection from "./index-sections/ContactSection";
import TrainingsSections from "./index-sections/TrainingsSections";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar/>
      <div className="wrapper">
        <IndexHeader/>
        <div className="main">
          <AboutSection/> {/* about section*/}
          <hr/>
          <GallerySection/> {/* Gallery section*/}
           <hr/>
          <EventsSection/> {/* trainings section*/}
           <hr/>
           <TrainingsSections/>
          <MainPartnersSection /> {/* Main partners section*/}

          <ContactSection /> {/* Contact Section */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
