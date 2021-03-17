/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {AiOutlineDash, BsChatQuote, FaHeart, FaLine, GiFinishLine, GiFlowers} from "react-icons/all";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" >
        <div
    className="page-header-image"
    style={{
      backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
    }}
    ref={pageHeader}
    />{/* 
        <Container>
          <div className="my-5 py-5">
            <h1 className="subtitle my-4 " >
                 <BsChatQuote/> The reciprocal recognition
                  sustainable practices
                  bearers of respect, of
                  democracy and peace on
                  mare nostrum . <BsChatQuote/></h1>
          </div>
        </Container>  */}
      </div>
    </>
  );
}

export default IndexHeader;
