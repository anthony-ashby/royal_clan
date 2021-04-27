import React from "react";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import Home from "./views/Home";
import Tournaments from "./views/Tournaments";
import Content from "./views/Content";
import Join from "./views/Join";
import ContactUs from "./views/ContactUs";
import Donate from "./views/Donate";
import Forums from "./views/Forums";
import { Row, Col } from "reactstrap";
// import Hidden from "@material-ui/core/Hidden";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <div>
          <Row className={"no-gutters"}>
            <Col xs={12}>
              <NavHeader />
            </Col>
          </Row>

          <Switch>
            <Route path="/tournaments">
              <Tournaments />
            </Route>
            <Route path="/forums">
              <Forums />
            </Route>
            <Route path="/content">
              <Content />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Row className={"no-gutters"}>
            <Col xs={12}>
              <NavFooter />
            </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default Main;
