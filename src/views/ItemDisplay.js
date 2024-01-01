import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { makeStyles, withStyles } from "tss-react/mui";
import BannerBackground from "../images/main_background.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { sanityClient } from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableText } from "@portabletext/react";
import {
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Tooltip,
  Zoom,
} from "@mui/material";

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
  },
  headerTxt: {
    color: "#71ccdf",
    fontSize: 20,
  },
  cardRoot: {
    margin: "20px",
    minHeight: "calc(80vh - 40px)",
    backgroundColor: "#111821",
    color: "#71ccdf",
    border: "2px solid black",
    "& a:link, a:visited, a:active": {
      textDecoration: "none",
      backgroundColor: "#051429",
    },
    "& a:hover": {
      textDecoration: "none",
      backgroundColor: "#051429",
    },
  },
  cardHeader: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#051429",
    color: "#71ccdf",
  },
  cardMediaContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
  },
  avatar: {
    color: "#071a33",
    backgroundColor: "#71ccdf",
  },
  cardTitle: {
    fontSize: 18,
    direction: "ltr",
  },
  cardSubTitle: {
    fontSize: 14,
    color: "#71ccdf",
    direction: "ltr",
  },
  cardContent: {
    padding: "10px 100px",
    backgroundColor: "#111821",
    color: "#71ccdf",
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
  buttonContainer: {
    textAlign: "left",
    marginTop: 25,
    marginLeft: 25,
  },
});

const builder = imageUrlBuilder(sanityClient);

const getSanityImageUrl = (args) => {
  const mainImage = builder
    .image(args)
    .ignoreImageParams()
    .height(300)
    .width(534)
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

const ItemDisplay = ({ displayItem }) => {
  const { classes } = useStyles();

  const formatDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    const year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
  };

  const getDateSubHeader = (prevItem) => {
    const startDateUtc = prevItem.startDate
      ? new Date(prevItem.startDate)
      : new Date(prevItem._createdAt);
    const formattedStart = formatDate(startDateUtc);
    if (prevItem.endDate) {
      const endDateUtc = new Date(prevItem.endDate);
      const formattedEnd = formatDate(endDateUtc);
      return formattedStart + " - " + formattedEnd;
    } else {
      return formattedStart;
    }
  };

  const BackButton = withStyles(IconButton, () => ({
    root: {
      height: "40px",
      color: "#71ccdf",
      "&:hover": {
        backgroundColor: "#71ccdf",
        color: "#071a33",
      },
    },
  }));

  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
        <Card className={classes.cardRoot}>
          <CardHeader
            className={classes.cardHeader}
            classes={{
              title: classes.cardTitle,
              subheader: classes.cardSubTitle,
            }}
            avatar={
              <Tooltip
                title={"Royal Admin"}
                placement="top"
                TransitionComponent={Zoom}
                enterDelay={600}
                enterNextDelay={600}
              >
                <Avatar className={classes.avatar}>R</Avatar>
              </Tooltip>
            }
            action={
              <Link
                to={`/${displayItem._type}`}
                style={{ textDecoration: "none" }}
              >
                <Tooltip
                  title={`Back to all ${displayItem._type}`}
                  placement="top"
                  TransitionComponent={Zoom}
                  enterDelay={600}
                  enterNextDelay={600}
                >
                  <BackButton>
                    <ArrowBackIcon />
                  </BackButton>
                </Tooltip>
              </Link>
            }
            title={displayItem.title}
            subheader={getDateSubHeader(displayItem)}
          />

          {displayItem.image && (
            <div className={classes.cardMediaContainer}>
              <CardMedia
                loading="lazy"
                sx={{ height: 300, width: 534 }}
                // className={classes.cardMedia}
                image={getSanityImageUrl(displayItem.image)}
              />
            </div>
          )}

          <CardContent className={classes.cardContent}>
            <PortableText value={displayItem.content} components={components} />
          </CardContent>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemDisplay;
