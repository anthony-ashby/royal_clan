import React from "react";
import NavHeader from "./components/NavHeader";
import MainContent from "./components/MainContent";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import NavFooter from "./components/NavFooter";
import { Row, Col } from "reactstrap";
import Hidden from "@material-ui/core/Hidden";

function Main() {
  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xs={12}>
          <NavHeader />
        </Col>
      </Row>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>
        <Col xl={2} xs={12}>
          <LeftContent />
        </Col>
        <Col xl={6} xs={12}>
          <MainContent />
        </Col>
        <Col xl={2} xs={12}>
          <RightContent />
        </Col>
        <Col xl={1}></Col>
      </Row>
      <Row className={"no-gutters"}>
        <Col xs={12}>
          <NavFooter />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
