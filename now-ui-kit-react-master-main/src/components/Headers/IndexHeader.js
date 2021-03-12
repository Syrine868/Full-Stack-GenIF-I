/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
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
      <div className="page-header clear-filter" filter-color="blue">
        <div
    className="page-header-image"
    style={{
      backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
    }}
    ref={pageHeader}
    />
        <Container>
          <div className="my-5 py-5">
            <h1 className="title my-5"><em>DU FRONTALIER ,AU TRANSFRONTALIER ,A LA MEDITERRANNEE</em> .</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
