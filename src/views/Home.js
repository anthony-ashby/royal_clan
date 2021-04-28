import React from "react";
import MainContent from "../components/MainContent";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import Hidden from "@material-ui/core/Hidden";

function Home() {
  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>

        <Hidden smDown>
          <Col xl={2} xs={12}>
            <LeftContent />
          </Col>
        </Hidden>

        <Col xl={6} xs={12}>
          <MainContent />
        </Col>

        <Col xl={2} xs={12}>
          <RightContent />
        </Col>

        <Col xl={1}></Col>
      </Row>
    </div>
  );
}

export default Home;
