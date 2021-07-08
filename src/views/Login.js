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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

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

function Login() {
  const classes = useStyles();
  const { login } = useAuth();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErrorMsg("");
      setLoading(true);
      await login(userInput.email, userInput.password);
      history.push("/");
    } catch {
      setErrorMsg("Failed to sign in.");
    }

    setLoading(false);
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
                  <div className={classes.headerTxt}>Login</div>
                </div>
                <div style={{ margin: 15, color: "#71ccdf" }}>Login form</div>
                <form noValidate>
                  <TextField
                    variant="filled"
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    value={userInput.email}
                    onChange={handleTextFieldChange}
                    autocomplete="email"
                    className={classes.customInputField}
                  />

                  <TextField
                    variant="filled"
                    margin="normal"
                    required
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    value={userInput.password}
                    onChange={handleTextFieldChange}
                    autocomplete="current-password"
                    className={classes.customInputField}
                  />
                  <Row className={"no-gutters"} style={{ marginTop: 20 }}>
                    <Col xl={12} xs={12}>
                      <ColorButtonGreen
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        style={{ width: "50%" }}
                        disabled={loading}
                      >
                        Log in
                      </ColorButtonGreen>
                    </Col>
                  </Row>
                </form>

                {errorMsg ? (
                  <Alert
                    severity="error"
                    style={{ marginTop: 20, marginLeft: "10%", width: "80%" }}
                  >
                    {errorMsg}
                  </Alert>
                ) : null}

                <div style={{ margin: 15, color: "#71ccdf" }}>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
                {/* <div style={{ margin: 15, color: "#71ccdf" }}>
                  Need an account? <Link to="/signup">Sign up</Link>
                </div> */}
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

export default Login;
