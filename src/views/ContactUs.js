import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles, withStyles } from "tss-react/mui";
import BannerBackground from "../images/main_background.jpg";
import emailjs from "emailjs-com";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const useStyles = makeStyles()({
  root: {
    backgroundColor: "#111821",
    height: "100%",
    width: "100%",
    minHeight: "80vh",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
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
  customInputField: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "white",
    fontWeight: "bold",
    width: "80%",
  },
  buttonContainer: {
    margin: "auto",
    marginTop: 20,
    textAlign: "center",
    width: "80%",
  },
  alertContainer: {
    textAlign: "center",
    width: "80%",
    margin: "auto",
    marginTop: 20,
    bottom: 20,
  },
});

const ColorButtonGreen = withStyles(Button, () => ({
  root: {
    color: "#071a33",
    backgroundColor: "rgb(87,181,112,0.7)",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(87,181,112,1)",
    },
  },
}));

const ColorButtonRed = withStyles(Button, () => ({
  root: {
    color: "#071a33",
    backgroundColor: "rgb(191,88,88,0.7)",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(191,88,88,1)",
    },
  },
}));

function ContactUs() {
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contactType, setContactType] = useState("general");

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  const handleSendEmail = (e) => {
    console.log(e);
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
    setLoading(true);

    if (contactType === "general") {
      emailjs
        .sendForm(
          "service_levg32h",
          "template_jbjgtmk",
          e.target,
          "user_zlIKllHNylhYP07sicoGm"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setShowSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            setShowError(true);
          }
        );
    } else if (contactType === "technical") {
      emailjs
        .sendForm(
          "service_8f8phbm",
          "template_5bom2un",
          e.target,
          "user_zlIKllHNylhYP07sicoGm"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setShowSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            setShowError(true);
          }
        );
    }
  };

  return (
    <Row className={"no-gutters"}>
      <Col xs={12} className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTxt}>Contact Us</div>
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSendEmail}>
          <div style={{ color: "#71ccdf", marginTop: "20px" }}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "#71ccdf" }} component="legend">
                Type of Inquiry?
              </FormLabel>
              <RadioGroup
                name="contact-type"
                value={contactType}
                onChange={handleContactTypeChange}
              >
                <Row className={"no-gutters"}>
                  <Col lg={6} xs={12}>
                    <FormControlLabel
                      value="general"
                      label="General"
                      control={
                        <Radio size="small" style={{ color: "#71ccdf" }} />
                      }
                    />
                  </Col>
                  <Col lg={6} xs={12}>
                    <FormControlLabel
                      value="technical"
                      label="Technical"
                      control={
                        <Radio size="small" style={{ color: "#71ccdf" }} />
                      }
                    />
                  </Col>
                </Row>
              </RadioGroup>
            </FormControl>
          </div>

          <TextField
            className={classes.customInputField}
            label="Name (Alias, Discord, Username)"
            variant="filled"
            name="contactName"
            size="small"
          />

          <TextField
            className={classes.customInputField}
            label="Email"
            variant="filled"
            name="contactEmail"
            size="small"
          />

          <TextField
            className={classes.customInputField}
            label="Message"
            variant="filled"
            name="contactBody"
            size="small"
            multiline
            rows={10}
          />

          {showSuccess && (
            <Alert severity="success" className={classes.alertContainer}>
              Your message was sent, thank you for your inquiry!
            </Alert>
          )}

          {showError && (
            <Alert severity="error" className={classes.alertContainer}>
              There was an error sending your message, please try again!
            </Alert>
          )}

          <div className={classes.buttonContainer}>
            <Row className={"no-gutters"}>
              <Col xl={6} xs={12}>
                <ColorButtonRed
                  variant="contained"
                  type="reset"
                  style={{ width: "95%" }}
                  disabled={loading}
                >
                  Clear
                </ColorButtonRed>
              </Col>
              <Col xl={6} xs={12}>
                <ColorButtonGreen
                  variant="contained"
                  type="submit"
                  style={{ width: "95%" }}
                  disabled={loading}
                >
                  Submit
                </ColorButtonGreen>
              </Col>
            </Row>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default ContactUs;
