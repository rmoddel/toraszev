import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbar.js";
import LandingPageHeader from "../components/Header.js";
import DefaultFooter from "../components/Footer.js";

function LandingPage() {
  const src = '<iframe src="https://toraszev.securepayments.cardpointe.com/." width="100%" height="1200px"></iframe>';
  function iframe () {
    return {
      __html: src
    }
  };
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
          <div dangerouslySetInnerHTML={ iframe() } />
        </Container>
      </div>
      <DefaultFooter />
    </div>
    </>
  );
}

export default LandingPage;
