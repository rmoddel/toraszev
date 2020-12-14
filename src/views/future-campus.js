import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbar.js";
import LandingPageHeader from "../components/Header.js";
import DefaultFooter from "../components/Footer.js";

function LandingPage() {

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <ExamplesNavbar />
    <div className="wrapper">
      <LandingPageHeader />
      <div>
        <Container>

        </Container>
      </div>
      <DefaultFooter />
    </div>
    </>
  );
}

export default LandingPage;
