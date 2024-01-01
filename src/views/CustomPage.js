import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "tss-react/mui";
import BannerBackground from "../images/main_background.jpg";
import UnderConstruction from "../images/under_construction.JPG";
import { sanityClient } from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "@portabletext/react";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#111821",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 0px 15px #000000",
    marginTop: "20px",
  },
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
    textAlign: "center",
  },
  headerTxt: {
    color: "#71ccdf",
    fontSize: 20,
  },
  mainImageContainer: {
    margin: 10,
    textAlign: "center",
  },
  mainImage: {
    height: "300px",
    borderRadius: "10px",
  },
  contentContainer: {
    minHeight: "calc(80vh - 75px)",
    margin: "10px 20px",
    padding: "10px 100px",
    backgroundColor: "#111821",
    color: "#71ccdf",
    borderRadius: 5,
  },
  content: {
    "& a:link, a:visited, a:active": {
      cursor: "pointer",
      backgroundColor: "#111821",
      textDecoration: "underline",
    },
    "& a:hover": {
      cursor: "pointer",
      backgroundColor: "#111821",
      textDecoration: "underline",
    },
  },
});

const builder = imageUrlBuilder(sanityClient);

const getSanityImageUrl = (args) => {
  const mainImage = builder
    .image(args)
    .ignoreImageParams()
    .height(300)
    .fit("fillmax")
    .bg("111821")
    .url();
  return mainImage;
};

const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={builder.image(value).width(200).fit("max").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
  },
};

const CustomPage = ({ page }) => {
  const { classes } = useStyles();
  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTxt}>{page.pageName}</div>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.mainImageContainer}>
            <img
              className={classes.mainImage}
              loading="lazy"
              src={
                page.image ? getSanityImageUrl(page.image) : UnderConstruction
              }
            />
          </div>
          <div className={classes.content}>
            {page.content ? (
              <PortableText value={page.content} components={components} />
            ) : (
              <div style={{ textAlign: "center" }}>
                This page is under construction. Please check back later!
              </div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CustomPage;
