import React, { useState, useEffect } from "react";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import Home from "./views/Home";
import Tournaments from "./views/Tournaments";
import Content from "./views/Content";
import ContactUs from "./views/ContactUs";
import Donate from "./views/Donate";
// import Forums from "./views/Forums";
// import Signup from "./views/Signup";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import { Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./views/UpdateProfile";
import Tournament from "./views/Tournament";

const Main = () => {
  const [announcementsPending, setAnnouncementsPending] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  const loadAnnouncements = async () => {
    try {
      const res = await fetch("/.netlify/functions/getAnnouncements");
      const announcementsFromDB = await res.json();
      setAnnouncements(announcementsFromDB);
      setAnnouncementsPending(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAnnouncements();
  }, [announcementsPending]);

  useEffect(() => {
    if (announcements) {
      let filtered = [];
      for (let i = 0; i < announcements.length; i++) {
        if (announcements[i].type === "tournament") {
          filtered.push(announcements[i]);
        }
      }
      setTournaments(filtered);
    }
  }, [announcements]);

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
              <Route path="/tournaments">
                <Tournaments announcements={announcements} />
              </Route>

              {tournaments.map((tournament) => (
                <Route
                  path={`/${tournament.title.split(" ").join("")}`}
                  key={tournament._id}
                >
                  <Tournament
                    tournament={tournament}
                    setAnnouncementsPending={setAnnouncementsPending}
                  />
                </Route>
              ))}
              <Route path="/content">
                <Content />
              </Route>
              <Route path="/contact" component={ContactUs} />
              <Route path="/donate" component={Donate} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route exact path="/">
                <Home
                  announcements={announcements}
                  setAnnouncementsPending={setAnnouncementsPending}
                />
              </Route>
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
};

export default Main;
