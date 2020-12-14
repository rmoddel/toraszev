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
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
      <div className="section section-about-us"  id="about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">About Cheder Toras Zev</h2>
              <h5 className="description">
                Cheder Toras Zev was founded 11 years ago...................................................
                ............................................................................................
                ............................................................................................
                ............................................................................................
                ............................................................................................
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col md="6">
                <div
                  className="image-container image-left"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/class-of-18.jpg") + ")"
                  }}
                >
                  <p className="blockquote blockquote-info">
                    "The Simchas Hachaim and Geshmak in learning that
                    the Cheder Toras Zev instills in our son is evident from
                    every aspect of his day. From getting up early without us having to wake him,
                    till him wanting to be in bed on time so he can be well
                    rested for his fun filled day at the Cheder" <br></br>
                    <br></br>
                    <small>-Rabbi and Mrs M. - Parents</small>
                  </p>
                </div>
                <div
                  className="image-container"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/class-of-18.jpg") + ")"
                  }}
                ></div>
              </Col>
              <Col md="5">
                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                    "url(" + require("assets/img/class-of-18.jpg") + ")"
                  }}
                ></div>
                <h3>
                  So what does the new record for the lowest level of winter
                  ice actually mean
                </h3>
                <p>
                  The Arctic Ocean freezes every winter and much of the
                  sea-ice then thaws every summer, and that process will
                  continue whatever happens with climate change. Even if the
                  Arctic continues to be one of the fastest-warming regions of
                  the world, it will always be plunged into bitterly cold
                  polar dark every winter. And year-by-year, for all kinds of
                  natural reasons, there’s huge variety of the state of the
                  ice.
                </p>
                <p>
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures
                  rise. But over the more than 30 years of satellite records,
                  scientists have observed a clear pattern of decline,
                  decade-by-decade.
                </p>
                <p>
                  The Arctic Ocean freezes every winter and much of the
                  sea-ice then thaws every summer, and that process will
                  continue whatever happens with climate change. Even if the
                  Arctic continues to be one of the fastest-warming regions of
                  the world, it will always be plunged into bitterly cold
                  polar dark every winter. And year-by-year, for all kinds of
                  natural reasons, there’s huge variety of the state of the
                  ice.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section section-team text-center" id="hanhala">
        <Container>
          <h2 className="title">Hanhalas Hacheder</h2>
          <div className="team">
            <Row>
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/chaim-zev.png")}
                  ></img>
                  <h4 className="title">Rabbi Chaim Zev Eidelman </h4>
                  <p className="category text-info">Rosh Hamosad</p>
                  <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/chaim-zev.png")}
                  ></img>
                  <h4 className="title">Rabbi Chaim Zev Eidelman </h4>
                  <p className="category text-info">Rosh Hamosad</p>
                  <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/chaim-zev.png")}
                  ></img>
                  <h4 className="title">Rabbi Chaim Zev Eidelman </h4>
                  <p className="category text-info">Rosh Hamosad</p>
                  <p className="description">
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      links
                    </a>{" "}
                    for people to be able to follow them outside the site.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section section-contact-us text-center" id="contact-us">
        <Container>
          <h2 className="title">Contact us?</h2>
          <p className="description">Looking forward to heaing from you.</p>
          <form name="contact" method="POST" data-netlify="true">
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    placeholder="Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    placeholder="Phone..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    required
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    required
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
      <DefaultFooter />
    </div>
    </>
  );
}

export default LandingPage;
