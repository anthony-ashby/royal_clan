import React from "react";
import { useState, useEffect } from "react";
import BannerBackground from "../../images/main_background.jpg";
import { getCommunityLinks } from "../../sanityClient";
import { makeStyles } from "tss-react/mui";
import { List, ListItemButton, ListItemText } from "@mui/material";

const useStyles = makeStyles()({
  root: {},
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
    color: "#71ccdf",
    fontSize: 20,
  },
  customLink: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 3,
    color: "#71ccdf",
    "&:hover": {
      backgroundColor: "#71ccdf",
      color: "#051429",
    },
  },
});

function CommunityLinks() {
  const { classes } = useStyles();
  const [communityLinks, setCommunityLinks] = useState([]);

  useEffect(() => {
    getCommunityLinks()
      .then((res) => {
        // This will find the first list where 'active (live)'  is true.
        const activeIdx = res.findIndex((list) => list.active === true);
        const links = res[activeIdx].communityLinksList;
        setCommunityLinks(links);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>Community Links</div>
      <List>
        {communityLinks.map((link) => (
          <ListItemButton
            key={link._key}
            className={classes.customLink}
            component="a"
            href={link.url}
            target="_blank"
          >
            <ListItemText primary={link.name} style={{ textAlign: "left" }} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}

export default CommunityLinks;
