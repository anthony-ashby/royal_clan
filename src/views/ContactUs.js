import React, { useState } from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { contactdb } from "../firebase";
import emailjs from "emailjs-com";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2e3c45",
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
    textAlign: "center",
    width: "80%",
    marginTop: 20,
    paddingTop: 20,
    position: "relative",
    bottom: 20,
    margin: "auto",
  },
  alertContainer: {
    textAlign: "center",
    width: "80%",
    marginTop: 20,
    bottom: 20,
    margin: "auto",
  },
});

function ContactUs() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contactType, setContactType] = useState("general");
  const [newContact, setNewContact] = useState({
    contactType: contactType,
    contactName: "",
    contactEmail: "",
    contactBody: "",
  });

  const ColorButtonGreen = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#57b570",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "rgb(87,181,112,0.7)",
      },
    },
  }))(Button);

  const ColorButtonRed = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#bf5858",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "rgb(191,88,88,0.7)",
      },
    },
  }))(Button);

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  function handleFormTextFieldChange(event) {
    const { name, value } = event.target;
    setNewContact((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleSendEmail = (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
    setLoading(true);

    const contactMsg = {
      contactType: contactType,
      contactName: newContact.contactName,
      contactEmail: newContact.contactEmail,
      contactBody: newContact.contactBody,
    };

    const sendMessageToDb = () => {
      let newContactInfo = contactdb.push();
      newContactInfo.set(contactMsg).catch((error) => {
        console.log("Problem saving to db with error: " + error.message);
      });
    };

    sendMessageToDb();

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
            handleClear();
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
            handleClear();
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            setShowError(true);
          }
        );
    }
  };

  const handleClear = (event) => {
    setNewContact({
      contactType: contactType,
      contactName: "",
      contactEmail: "",
      contactBody: "",
    });
  };

  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>

        <Col xl={8} xs={12}>
          <Row className={"no-gutters"}>
            <Col xs={1}></Col>
            <Col xl={12} xs={10} className={classes.root}>
              <div style={{ color: "#71ccdf" }}>
                <div className={classes.header}>
                  <div className={classes.headerTxt}>Contact Us</div>
                </div>
                <form noValidate autoComplete="off" onSubmit={handleSendEmail}>
                  <div>
                    <FormControl
                      style={{ marginTop: "20px" }}
                      component="fieldset"
                    >
                      <FormLabel
                        component="legend"
                        style={{ color: "#71ccdf", marginTop: "20px" }}
                      >
                        Type of Inquiry?
                      </FormLabel>
                      <RadioGroup
                        aria-label="contact-type"
                        name="contact-type"
                        value={contactType}
                        onChange={handleContactTypeChange}
                      >
                        <Row className={"no-gutters"}>
                          <Col lg={6} xs={12}>
                            <FormControlLabel
                              value="general"
                              control={
                                <Radio
                                  size="small"
                                  style={{ color: "#71ccdf" }}
                                />
                              }
                              label="General"
                            />
                          </Col>
                          <Col lg={6} xs={12}>
                            <FormControlLabel
                              value="technical"
                              control={
                                <Radio
                                  size="small"
                                  style={{ color: "#71ccdf" }}
                                />
                              }
                              label="Technical"
                            />
                          </Col>
                        </Row>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                    <TextField
                      className={classes.customInputField}
                      label="Name (Alias, Discord, Username)"
                      variant="filled"
                      name="contactName"
                      size="small"
                      value={newContact.contactName}
                      onChange={handleFormTextFieldChange}
                    />
                  </div>
                  <div>
                    <TextField
                      className={classes.customInputField}
                      label="Email"
                      variant="filled"
                      name="contactEmail"
                      size="small"
                      value={newContact.contactEmail}
                      onChange={handleFormTextFieldChange}
                    />
                  </div>
                  <div>
                    <TextField
                      className={classes.customInputField}
                      label="Message"
                      variant="filled"
                      name="contactBody"
                      size="small"
                      value={newContact.contactBody}
                      onChange={handleFormTextFieldChange}
                      multiline
                      rows={10}
                    />
                  </div>
                  <div>
                    {showSuccess && (
                      <Alert
                        severity="success"
                        className={classes.alertContainer}
                      >
                        Your message was sent, thank you for your inquiry!
                      </Alert>
                    )}

                    {showError && (
                      <Alert
                        severity="error"
                        className={classes.alertContainer}
                      >
                        There was an error sending your message, please try
                        again!
                      </Alert>
                    )}

                    <div className={classes.buttonContainer}>
                      <Row className={"no-gutters"}>
                        <Col xl={6} xs={12}>
                          <ColorButtonRed
                            variant="contained"
                            color="primary"
                            onClick={handleClear}
                            style={{ width: "95%" }}
                          >
                            Clear
                          </ColorButtonRed>
                        </Col>
                        <Col xl={6} xs={12}>
                          <ColorButtonGreen
                            variant="contained"
                            color="primary"
                            // onClick={handleSubmit}
                            type="submit"
                            style={{ width: "95%" }}
                            disabled={loading}
                          >
                            Submit
                          </ColorButtonGreen>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Col>

        <Col xl={2} xs={12}>
          <RightContent />
        </Col>

        <Col xl={1}></Col>
      </Row>
    </div>
  );
}

export default ContactUs;
