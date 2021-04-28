import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
});

function AddForm() {
  const classes = useStyles();
  return (
    <div>
      <div style={{ marginTop: 10 }}>Which link would you like to add?</div>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.customInputField}
          id="outlined-basic"
          label="Link Name"
          variant="filled"
          name="name"
          value={createNewLink.name}
          onChange={handleAddFormTextFieldChange}
        />
        <TextField
          className={classes.customInputField}
          id="outlined-basic2"
          label="Link URL"
          variant="filled"
          name="url"
          value={createNewLink.url}
          onChange={handleAddFormTextFieldChange}
        />
      </form>
      {showAddFormError ? (
        <div>Please make sure you entered a value for Name and URL.</div>
      ) : null}
      <div className={classes.buttonContainer}>
        <Row className={"no-gutters"}>
          <Col xl={6} xs={12}>
            <ColorButtonRed
              variant="contained"
              color="primary"
              onClick={handleModalCancel}
              style={{ width: "90%" }}
            >
              Cancel
            </ColorButtonRed>
          </Col>
          <Col xl={6} xs={12}>
            <ColorButtonGreen
              variant="contained"
              color="primary"
              onClick={handleAddSubmit}
              style={{ width: "90%" }}
            >
              Submit
            </ColorButtonGreen>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddForm;
