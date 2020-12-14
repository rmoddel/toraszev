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
                    href="https://www.google.com/maps/place/1000+Cross+St,+Lakewood,+NJ+08701/data=!4m2!3m1!1s0x89c1785840aa304f:0xf33d0f9a7fbaf8e?sa=X&ved=2ahUKEwjh8YHu18rtAhVPjlkKHYB9CNgQ8gEwAHoECAUQAQ"
                    target="_blank"
                  >
                    <b>ADDRESS</b> : 1000 Cross Street Lakewood NJ, 08701
                  </a>
                </li>
                <li>
                  <a
                    href="tel:732.901.5060"
                    target="_blank"
                  >
                    <b>PHONE</b> : 732.901.5060
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:toraszev@gmail.com"
                    target="_blank"
                  >
                    <b>EMAIL</b> : toraszev@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright" id="copyright">
              ©TZC {new Date().getFullYear()}
            </div>
          </Container>
        </footer>
      </>
    );
  }

  export default DefaultFooter;
