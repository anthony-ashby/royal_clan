import React from "react";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { sanityClient } from "../sanityClient";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Tooltip,
  Zoom,
} from "@mui/material";

const useStyles = makeStyles()(() => ({
  cardRoot: {
    width: "auto",
    height: "auto",
    margin: "10px",
    backgroundColor: "#051429",
    color: "#71ccdf",
    border: "2px solid black",
    "&:hover": {
      boxShadow: "0 0px 15px #000000",
    },
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
    width: "100%",
    padding: "10px",
    paddingLeft: "50px",
    backgroundColor: "#051429",
    color: "#71ccdf",
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
    webkitMaskImage:
      "linear-gradient(to bottom, rgb(17, 24, 33) 0, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, rgb(17, 24, 33) 0, transparent 100%)",
    overflow: "hidden",
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
  cardFooter: {
    width: "100%",
    textAlign: "center",
    padding: "10px 0px",
    color: "#71ccdf",
  },
}));

const builder = imageUrlBuilder(sanityClient);

const getSanityImageUrl = (args) => {
  const mainImage = builder
    .image(args)
    .ignoreImageParams()
    .height(200)
    .width(356)
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

const PreviewCard = ({ preview }) => {
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

  return (
    <Card className={classes.cardRoot}>
      <Link to={`/${preview._type}/${preview.slug.current}`}>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            title: classes.cardTitle,
            subheader: classes.cardSubTitle,
          }}
          title={preview.title}
          subheader={getDateSubHeader(preview)}
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
        />

        {preview.image && (
          <CardMedia
            loading="lazy"
            sx={{ height: 200 }}
            image={getSanityImageUrl(preview.image)}
          />
        )}
      </Link>

      <CardContent
        className={classes.cardContent}
        style={{
          height: preview.image ? "100px" : "355.56px",
        }}
      >
        <PortableText value={preview.content} components={components} />
      </CardContent>

      <Link to={`/${preview._type}/${preview.slug.current}`}>
        <div className={classes.cardFooter}>Read More</div>
      </Link>
    </Card>
  );
};

export default PreviewCard;
