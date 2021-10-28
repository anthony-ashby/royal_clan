import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import BannerBackground from "../images/main_background.jpg";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

const useStyles = makeStyles({
  root: {},
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginTop: 25,
    marginBottom: 25,
    color: "#71ccdf",
    fontSize: 20,
  },
});

const items = [
  {
    src: "https://vangogh.teespring.com/v3/image/YqABUPOMsuE4dtx7UiwbFDGQIPo/225/225.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "https://vangogh.teespring.com/v3/image/GxDihHZD-egDuq0-F--RKoFW9Q8/225/225.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "https://vangogh.teespring.com/v3/image/CYxNQMLXJMZi22UZYtgmWGzy14w/225/225.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "https://vangogh.teespring.com/v3/image/mz3QX8q6sff0MBRdnMQ9HThYsWg/225/225.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
  },
  {
    src: "https://vangogh.teespring.com/v3/image/mYVibzjTeKbWihGqx3KrhNy69Kw/225/225.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
  },
  {
    src: "https://vangogh.teespring.com/v3/image/Dbu1GceesrRcOPdLjsnqUUUV70o/225/225.jpg",
    altText: "Slide 6",
    caption: "Slide 6",
  },
];

const MerchCarousel = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a
          href="https://royal-clan-2.creator-spring.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img src={item.src} alt={item.altText} />
        </a>
      </CarouselItem>
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.header}>Merchandise</div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default MerchCarousel;
