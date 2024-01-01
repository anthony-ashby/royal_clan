import React, { useState, useEffect, Suspense } from "react";
import { Row, Col } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";
import ItemsPreview from "./views/ItemsPreview";
import Loading from "./views/Loading";
import LatestVideos from "./views/LatestVideos";
import ContactUs from "./views/ContactUs";
import CustomPage from "./views/CustomPage";
import ItemDisplay from "./views/ItemDisplay";
import { getAccessToken, getRoyalVideos } from "./apis/TwitchApi";
import YouTubeApi from "./apis/YouTubeApi";
import Hidden from "@mui/material/Hidden";
import {
  getAnnouncements,
  getEvents,
  getTournaments,
  getPages,
  getPageContents,
} from "./sanityClient";

const Main = () => {
  const [twitchAccessToken, setTwitchAccessToken] = useState([]);
  const [customPages, setCustomPages] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    getAccessToken()
      .then((res) => {
        setTwitchAccessToken(res.data.access_token);
      })
      .catch((err) => console.log(err));

    getPages()
      .then((res) => {
        const pages = res;
        getPageContents()
          .then((res) => {
            const contents = res;
            pages.forEach((page) => {
              const foundContent = contents.find(
                (pageContent) => pageContent.forPage._id === page._id
              );
              if (foundContent) {
                page.image = foundContent.image;
                page.content = foundContent.content;
              }
            });
            setCustomPages(pages);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    getAnnouncements()
      .then((res) => {
        setAnnouncements(res);
      })
      .catch((err) => console.log(err));

    getEvents()
      .then((res) => {
        setEvents(res);
      })
      .catch((err) => console.log(err));

    getTournaments()
      .then((res) => {
        setTournaments(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setAllItems(announcements.concat(events).concat(tournaments));
  }, [tournaments, events, announcements]);

  return (
    <Router>
      <Row className={"no-gutters"}>
        <Col xs={12}>
          <NavHeader pages={customPages} />
        </Col>
      </Row>
      <Row className={"no-gutters"}>
        <Hidden xlDown>
          <Col xl={2} xs={12}>
            <LeftContent />
          </Col>
        </Hidden>
        <Col xl={8} xs={12}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                exact
                path={"/"}
                element={
                  <ItemsPreview
                    previewTitle={"News Feed"}
                    previewItems={allItems}
                  />
                }
              />
              <Route
                exact
                path={"/tournaments"}
                element={
                  <ItemsPreview
                    previewTitle={"Tournaments"}
                    previewItems={tournaments}
                  />
                }
              />
              <Route
                exact
                path={"/events"}
                element={
                  <ItemsPreview previewTitle={"Events"} previewItems={events} />
                }
              />
              <Route
                exact
                path={"/announcements"}
                element={
                  <ItemsPreview
                    previewTitle={"Announcements"}
                    previewItems={announcements}
                  />
                }
              />
              {announcements &&
                announcements.map((announcement) => (
                  <Route
                    path={`/announcements/${announcement.slug.current}`}
                    key={announcement._id}
                    element={<ItemDisplay displayItem={announcement} />}
                  />
                ))}

              {events &&
                events.map((event) => (
                  <Route
                    path={`/events/${event.slug.current}`}
                    key={event._id}
                    element={<ItemDisplay displayItem={event} />}
                  />
                ))}

              {tournaments &&
                tournaments.map((tournament) => (
                  <Route
                    path={`/tournaments/${tournament.slug.current}`}
                    key={tournament._id}
                    element={<ItemDisplay displayItem={tournament} />}
                  />
                ))}

              <Route
                path="/content"
                element={<LatestVideos twitchAccessToken={twitchAccessToken} />}
              />

              {/* <Route path="/contact" element={<ContactUs />} /> */}

              {customPages &&
                customPages.map((page) => (
                  <Route
                    path={`/${page.pageName.toLowerCase()}`}
                    key={page._id}
                    element={<CustomPage page={page} />}
                  />
                ))}
            </Routes>
          </Suspense>
        </Col>
        <Hidden xlDown>
          <Col xl={2} xs={12}>
            <RightContent twitchAccessToken={twitchAccessToken} />
          </Col>
        </Hidden>
      </Row>
      <Row className={"no-gutters"}>
        <Col xs={12}>
          <NavFooter />
        </Col>
      </Row>
    </Router>
  );
};

export default Main;
