/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "./views/index.js";
import Donate from "./views/donate.js";
import Dinner2020 from "./views/dinner-2020.js";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/donate" render={props => <Donate {...props} />} />
        <Route path="/dinner2020" render={props => <Dinner2020 {...props} />} />
        <Redirect to="/index" />
        <Redirect to="/contact-us" />
        <Redirect from="/" to="/index" />
      </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
