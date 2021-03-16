/*eslint-disable*/
import React from "react";
import { FaHeart, FaHome } from "react-icons/fa";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>

        </nav>
        <div className="text-center" id="copyright">
          © {new Date().getFullYear()}, Designed & Coded by{" "}
           Quad Squad <FaHeart/>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
