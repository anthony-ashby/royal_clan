import React from "react";
import NavHeader from "./components/NavHeader";
import MainContent from "./components/MainContent";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import NavFooter from "./components/NavFooter";
import { Row, Col } from "reactstrap";

function Main() {
  return (
    <div>
      <Row className={"no-gutters"}>
        <Col lg={1}></Col>
        <Col lg={10}>
          <NavHeader />
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className={"no-gutters"}>
        <Col lg={1}></Col>
        <Col lg={2}>
          <LeftContent />
        </Col>
        <Col lg={6}>
          <MainContent />
        </Col>
        <Col lg={2}>
          <RightContent />
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className={"no-gutters"}>
        <Col lg={12}>
          <NavFooter />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
