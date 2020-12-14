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
  const amountArr = [
      {amount: "18000",text : "Founder $18,000 "},
      {amount: "15000",text : "Pillar $15,00"},
      {amount: "10000",text : "Master Builder	$10,000"},
      {amount: "7200",  text :	"Builder  $7,200"},
      {amount: "5000",  text :	"Benefactor $5,00"},
      {amount: "3600",  text :	"Platinum  $3,600"},
      {amount: "2500",  text :	"Diamond $2,500"},
      {amount: "1800",  text :	"Chai  $1,800"},
      {amount: "1000",  text :	"Sar Eleph $1,000"},
      {amount: "500", text :	"Gold  $50"},
      {amount: "360", text :	"Silver $360"},
      {amount: "200", text :	"Sponsor   $200"},
      {amount: "125", text :	"Friend   $125"},
      {amount: "72",  text :	"Greeting   $72"},
      {amount: "72",  text :	"Greeting   $72"}
  ];
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
          <Row>
            {amountArr.map(i => {
              const href= `"https://toraszev.securepayments.cardpointe.com/pay?total=${i.amount}"`;
              return (
                <Col md="4">
                  <Button className="btn btn-info" style={{width: "100%"}}>
                    <a href={href} style={{fontWeight: "bold",color: "white"}}><p>{i.text}</p></a>
                  </Button>
                </Col>
              )
            })}
            <Col md="4">
              <a href="https://toraszev.securepayments.cardpointe.com/pay?type=donate"><p>Other </p> </a>
            </Col>
          </Row>
        </Container>
      </div>
      <DefaultFooter />
    </div>
    </>
  );
}

export default LandingPage;
