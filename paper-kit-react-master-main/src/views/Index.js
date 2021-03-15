import React from "react";
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections

import SectionAboutUs from "./index-sections/SectionAboutUs";
import SectionGallery from "./index-sections/SectionGallery";
import SectionServices from "./index-sections/SectionServices";
import SectionEvents from "./index-sections/SectionEvents";
import SectionCalendar from "./index-sections/SectionCalendar";
import SectionContact from "./index-sections/SectionContact";
import DemoFooter from "../components/Footers/DemoFooter";
import Audio from "components/BgAudio/Audio";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

    return (
    <>
    <Audio/>
        <IndexNavbar />
        <IndexHeader />
        <div className="main">
        <SectionAboutUs/>
        <hr/> 
        <SectionGallery />
        <hr/>
        <SectionServices/>
        <hr/>
        <SectionEvents/>
        <hr/>
        <SectionCalendar/>
        <SectionContact/>
        <DemoFooter />

      </div>
    </>
  );

}


export default Index;
