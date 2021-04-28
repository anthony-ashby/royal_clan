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
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import { Row, Col } from "reactstrap";
// import Hidden from "@material-ui/core/Hidden";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./views/UpdateProfile";

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

          <AuthProvider>
            <Switch>
              <Route path="/tournaments" component={Tournaments} />
              <Route path="/forums" component={Forums} />
              <Route path="/content" component={Content} />
              <Route path="/join" component={Join} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/donate" component={Donate} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            </Switch>
          </AuthProvider>

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
