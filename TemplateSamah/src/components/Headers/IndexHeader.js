/*eslint-disable*/
import React from "react";
import {useTranslation} from "react-i18next";
// reactstrap components
import {Container, NavbarBrand} from "reactstrap";

// core components

function IndexHeader() {
/*  const{t, i18n} = useTranslation();
    const changeLanguage = (ln)=> {
        return () => {
            i18n.changeLanguage(ln);
            console.log('Language changed to ' + ln);
        }
    }*/


  return (
    <>
      <div
          id="home"
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg2.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand mb-lg-5">
              <h1 className="titre">Healing Energy Reiki Usui </h1>

            </div>
            <h2 className="presentation-subtitle text-center">
                Reiki, energy treatments, Laughter Yoga, dance therapy, art therapy, life coaching, EFT lithotherapy, reflexology ...
                 Here is your well-being address! ♡
                 Namaste. ♡
            </h2>
            <br/>
            <br/>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
}


export default IndexHeader;
