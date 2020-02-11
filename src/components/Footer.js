/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="http://toraszev.org"
                  target="_blank"
                >
                  Home
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()},  Site Credits: {" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
            {" "} & {" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            {" "} & {" "}
            <a
              href="http://rmoddel.com"
              target="_blank"
            > ...
            </a>

          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
