import React, { useState } from "react";
import RightContent from "../components/RightContent";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import BannerBackground from "../images/main_background.jpg";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
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
    backgroundColor: "#71ccdf",
    fontWeight: "bold",
    width: "80%",
  },
});

function UpdateProfile() {
  const classes = useStyles();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleTextFieldChange(event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.password !== userInput.passwordConfirm) {
      return setErrorMsg("Passwords do not match");
    }

    if (userInput.password.length < 6) {
      return setErrorMsg("Password must be a minimum of 6 characters");
    }

    if (userInput.email === "") {
      return setErrorMsg("Please enter an email");
    }

    const promises = [];
    setLoading(true);
    setErrorMsg("");

    if (userInput.email !== currentUser.email) {
      promises.push(updateEmail(userInput.email));
    }
    if (userInput.password) {
      promises.push(updatePassword(userInput.password));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setErrorMsg("Failed to update account.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const ColorButtonGreen = withStyles((theme) => ({
    root: {
      color: "#071a33",
      backgroundColor: "#57b570",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#57b570",
      },
    },
  }))(Button);

  return (
    <div>
      <Row className={"no-gutters"}>
        <Col xl={1}></Col>

        <Col xl={8} xs={12}>
          <Row className={"no-gutters"}>
            <Col xs={1}></Col>
            <Col xl={12} xs={10} className={classes.root}>
              <div>
                <div className={classes.header}>
                  <div className={classes.headerTxt}>Update Profile</div>
                </div>
                <form noValidate autoComplete="off">
                  <TextField
                    className={classes.customInputField}
                    id="email_input"
                    label="Email Address"
                    variant="filled"
                    name="email"
                    // defaultValue={currentUser.email}
                    value={userInput.email}
                    onChange={handleTextFieldChange}
                    required
                  />
                  <TextField
                    className={classes.customInputField}
                    id="pw_input"
                    label="Create Password"
                    variant="filled"
                    name="password"
                    value={userInput.password}
                    onChange={handleTextFieldChange}
                    // placeholder={"Leave blank to keep the same password"}
                  />
                  <TextField
                    className={classes.customInputField}
                    id="pw_confirm"
                    label="Confirm Password"
                    variant="filled"
                    name="passwordConfirm"
                    value={userInput.passwordConfirm}
                    onChange={handleTextFieldChange}
                    // placeholder={"Leave blank to keep the same password"}
                  />
                </form>
                {errorMsg ? (
                  <Alert
                    severity="error"
                    style={{ marginTop: 20, marginLeft: "10%", width: "80%" }}
                  >
                    {errorMsg}
                  </Alert>
                ) : null}
                <Row className={"no-gutters"} style={{ marginTop: 20 }}>
                  <Col xl={12} xs={12}>
                    <ColorButtonGreen
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      style={{ width: "50%" }}
                      disabled={loading}
                    >
                      Update
                    </ColorButtonGreen>
                  </Col>
                </Row>
                <div style={{ margin: 15, color: "#71ccdf" }}>
                  <Link to="/">Cancel</Link>
                </div>
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

export default UpdateProfile;
