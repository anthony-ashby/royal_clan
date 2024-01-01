import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "tss-react/mui";
import PreviewCard from "../components/PreviewCard";
import BannerBackground from "../images/main_background.jpg";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#111821",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 0px 15px #000000",
    marginTop: "20px",
    textAlign: "center",
  },
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
  },
  headerTxt: {
    color: "#71ccdf",
    fontSize: 20,
  },
});

const ItemsPreview = ({ previewTitle, previewItems }) => {
  const { classes } = useStyles();
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (previewItems) {
      let sorted = previewItems.sort((x, y) => {
        let a = new Date(x.startDate ? x.startDate : x._createdAt);
        let b = new Date(y.startDate ? y.startDate : y._createdAt);
        return b - a;
      });
      setSortedItems(sorted);
    }
  }, [previewItems]);

  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTxt}>{previewTitle}</div>
        </div>
        <Row className={"no-gutters"} style={{ margin: "0px 10px" }}>
          {sortedItems &&
            sortedItems.map((previewItem) => (
              <Col xs={4} key={previewItem._id}>
                <PreviewCard preview={previewItem} />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemsPreview;
