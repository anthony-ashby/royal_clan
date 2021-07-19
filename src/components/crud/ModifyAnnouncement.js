import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useAuth } from "../../contexts/AuthContext";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { storage } from "../../firebase";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AnnouncementSection from "../AnnouncementSection";
// import parse from "html-react-parser";

const useStyles = makeStyles({
  root: {},
  customInputField: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#fff",
    fontWeight: "bold",
    width: "80%",
  },
  customFileInputField: {
    marginTop: 10,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#71ccdf",
    fontWeight: "bold",
    width: "80%",
    "&:hover": {
      backgroundColor: "#071a33",
      color: "#71ccdf",
    },
  },
  customDropDown: {
    marginTop: 20,
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#fff",
    fontWeight: "bold",
    width: "80%",
    textAlign: "left",
  },
  buttonContainer: {
    textAlign: "center",
    width: "96%",
    marginTop: 20,
    paddingTop: 20,
    position: "relative",
    bottom: 20,
  },
  input: {
    display: "none",
    width: "100%",
  },
  customInputSectionField: {
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "#fff",
    fontWeight: "bold",
    width: "90%",
  },
  addSectionButton: {
    marginTop: "20px",
    color: "#071a33",
    backgroundColor: "#71ccdf",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(113,204,223,0.7)",
    },
  },
});

const ModifyAnnouncement = ({
  handleModalClose,
  setAnnouncementsPending,
  announcements,
  selectedAnnouncement,
}) => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [mediaType, setMediaType] = useState("none");
  const [announcementType, setAnnouncementType] = useState("general");
  const [uploadImage, setUploadImage] = useState(null);
  const [uploadImageName, setUploadImageName] = useState("");
  const [uploadedImageURL, setUploadedImageURL] = useState("");
  const [uploadImageSuccess, setUploadImageSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bodyText, setBodyText] = useState(
    selectedAnnouncement ? selectedAnnouncement.body : ""
  );
  const [sections, setSections] = useState([]);
  const [sectionCount, setSectionCount] = useState(0);
  const [showUploadImageError, setShowUploadImageError] = useState(false);
  const [showModifyFormError, setShowModifyFormError] = useState(false);
  const [modifyAnnouncement, setModifyAnnouncement] = React.useState("");
  const [modifyAnnouncementObject, setModifyAnnouncementObject] =
    React.useState({
      dateCreated: "",
      dateModified: "",
      dateArchived: "",
      createdBy: "",
      modifiedBy: "",
      archived: false,
      title: "",
      imageURL: "",
      videoURL: "",
      body: "",
      type: "general",
      sections: "",
    });

  useEffect(() => {
    if (selectedAnnouncement) {
      const announcementSections = JSON.parse(selectedAnnouncement.sections);
      setModifyAnnouncementObject(selectedAnnouncement);
      setModifyAnnouncement(selectedAnnouncement._id);
      setAnnouncementType(selectedAnnouncement.type);
      setSections(announcementSections);
      setSectionCount(announcementSections.length);
      if (selectedAnnouncement.imageURL) {
        setUploadImageSuccess(true);
        setUploadedImageURL(selectedAnnouncement.imageURL);
        setMediaType("image");
      }
    }
  }, [selectedAnnouncement]);

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

  const handleResetUploadImage = () => {
    setUploadImage(null);
    setUploadImageName("");
    setUploadImageSuccess(false);
    setUploadedImageURL("");
  };

  const handleImageUpload = useCallback(() => {
    setLoading(true);
    const uploadTask = storage
      .ref(`announcement_images/${uploadImageName}`)
      .put(uploadImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        setLoading(false);
      },
      () => {
        storage
          .ref("announcement_images")
          .child(uploadImageName)
          .getDownloadURL()
          .then((url) => {
            setUploadedImageURL(url);
            setUploadImageSuccess(true);
            setLoading(false);
          });
      }
    );
  }, [uploadImage, uploadImageName]);

  useEffect(() => {
    if (uploadImage) {
      handleImageUpload();
    }
  }, [uploadImage, handleImageUpload]);

  function handleModifySubmit(event) {
    if (uploadImageName !== "" && !uploadedImageURL) {
      return setShowUploadImageError(true);
    }

    const updateAnnouncementObj = {
      _id: modifyAnnouncementObject._id,
      dateCreated: modifyAnnouncementObject.dateCreated,
      dateModified: new Date().toISOString(),
      createdBy: modifyAnnouncementObject.createdBy,
      modifiedBy: currentUser.email,
      title: modifyAnnouncementObject.title,
      imageURL: uploadedImageURL ? uploadedImageURL : null,
      body: bodyText,
      type: announcementType,
      sections: JSON.stringify(sections),
    };

    const updateAnnouncement = async () => {
      if (
        updateAnnouncementObj.title !== "" &&
        updateAnnouncementObj.body !== ""
      ) {
        try {
          await fetch("/.netlify/functions/updateAnnouncement", {
            method: "PUT",
            body: JSON.stringify(updateAnnouncementObj),
          });
        } catch (err) {
          console.log(err);
        }
        handleModalClose();
        setShowModifyFormError(false);
        setAnnouncementsPending(true);
      } else {
        setShowModifyFormError(true);
      }
    };

    updateAnnouncement();
  }

  function handleModifyFormTextFieldChange(event) {
    const { name, value } = event.target;
    setModifyAnnouncementObject((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleModifyFormSelection = (event) => {
    setModifyAnnouncement(event.target.value);
    let modifyObj = announcements.filter(
      (announcement) => announcement._id === event.target.value
    );
    const announcementSections = JSON.parse(modifyObj[0].sections);
    setSections(announcementSections);
    setSectionCount(announcementSections.length);
    setModifyAnnouncementObject(modifyObj[0]);
    setAnnouncementType(modifyObj[0].type);
    setUploadedImageURL(modifyObj[0].imageURL);
    setBodyText(modifyObj[0].body);
    if (modifyObj[0].imageURL) {
      setMediaType("image");
      setUploadImageSuccess(true);
    }
  };

  const handleMediaTypeChange = (event) => {
    setMediaType(event.target.value);
  };

  const handleAnnouncementTypeChange = (event) => {
    setAnnouncementType(event.target.value);
  };

  const handleFileUploadChange = (e) => {
    if (e.target.files[0]) {
      setUploadImage(e.target.files[0]);
      setUploadImageName(e.target.files[0].name);
    }
  };

  const handleCreateNewSection = () => {
    setSections([
      ...sections,
      {
        sectionId: sectionCount,
        sectionTitle: "",
        sectionBody: "",
      },
    ]);
    setSectionCount(sectionCount + 1);
  };

  const handleDeleteSection = (id) => {
    const newSections = sections.filter((section) => {
      return section.sectionId !== id;
    });
    setSections(newSections);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        Please use the form below to modify an announcement.
      </div>
      <FormControl variant="filled" className={classes.customDropDown}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Announcement
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-filled"
          value={modifyAnnouncement}
          onChange={handleModifyFormSelection}
        >
          {announcements.map((announcement) => (
            <MenuItem key={announcement._id} value={announcement._id}>
              {announcement.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <form noValidate autoComplete="off">
        <div>
          <FormControl style={{ marginTop: "20px" }} component="fieldset">
            <FormLabel
              component="legend"
              style={{ color: "#71ccdf", marginTop: "20px" }}
            >
              Type of Announcement?
            </FormLabel>
            <RadioGroup
              aria-label="announcement-type"
              name="announcement-type"
              value={announcementType}
              onChange={handleAnnouncementTypeChange}
            >
              <Row className={"no-gutters"}>
                <Col lg={6} xs={12}>
                  <FormControlLabel
                    value="general"
                    control={
                      <Radio size="small" style={{ color: "#71ccdf" }} />
                    }
                    label="General"
                  />
                </Col>
                <Col lg={6} xs={12}>
                  <FormControlLabel
                    value="tournament"
                    control={
                      <Radio size="small" style={{ color: "#71ccdf" }} />
                    }
                    label="Tournament"
                  />
                </Col>
              </Row>
            </RadioGroup>
          </FormControl>
        </div>

        <TextField
          className={classes.customInputField}
          id="outlined-basic"
          label="Title"
          variant="filled"
          name="title"
          size="small"
          value={modifyAnnouncementObject.title}
          onChange={handleModifyFormTextFieldChange}
        />

        {!uploadImageSuccess && (
          <FormControl style={{ marginTop: "20px" }} component="fieldset">
            <FormLabel
              component="legend"
              style={{ color: "#71ccdf", marginTop: "20px" }}
            >
              Add Media?
            </FormLabel>
            <RadioGroup
              aria-label="media-upload-type"
              name="media"
              value={mediaType}
              onChange={handleMediaTypeChange}
            >
              <Row className={"no-gutters"}>
                <Col lg={4} xs={12}>
                  <FormControlLabel
                    value="none"
                    control={
                      <Radio size="small" style={{ color: "#71ccdf" }} />
                    }
                    label="None"
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <FormControlLabel
                    value="image"
                    control={
                      <Radio size="small" style={{ color: "#71ccdf" }} />
                    }
                    label="Image"
                  />
                </Col>
                <Col lg={4} xs={12}>
                  <FormControlLabel
                    value="video"
                    control={
                      <Radio size="small" style={{ color: "#71ccdf" }} />
                    }
                    label="Video"
                  />
                </Col>
              </Row>
            </RadioGroup>
          </FormControl>
        )}

        {showUploadImageError ? <div>Please click upload image.</div> : null}

        {mediaType === "image" ? (
          <div>
            {uploadImageSuccess ? (
              <div>
                <div style={{ width: "100%", marginTop: "20px" }}>
                  <img
                    src={uploadedImageURL}
                    alt="Uploaded"
                    style={{ width: "200px" }}
                  />
                </div>
                <Row className={"no-gutters"}>
                  <Col xl={3} xs={12}></Col>
                  <Col xl={6} xs={12}>
                    <ColorButtonRed
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={handleResetUploadImage}
                      style={{ width: "90%", marginTop: "20px" }}
                    >
                      Remove
                    </ColorButtonRed>
                  </Col>
                  <Col xl={3} xs={12}></Col>
                </Row>
              </div>
            ) : (
              uploadImageName
            )}

            {!uploadImageSuccess && (
              <div>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={handleFileUploadChange}
                />
                <label
                  htmlFor="contained-button-file"
                  style={{ width: "100%", marginBottom: "0" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    size="small"
                    className={classes.customFileInputField}
                  >
                    {"Choose Image - (Optimal Size Ratio: 9:16)"}
                  </Button>
                </label>
              </div>
            )}
          </div>
        ) : null}

        {mediaType === "video" ? (
          <TextField
            className={classes.customInputField}
            id="outlined-basic4"
            label="Video URL (Twitch, YouTube)"
            variant="filled"
            name="videoURL"
            size="small"
            value={modifyAnnouncementObject.video}
            onChange={handleModifyFormTextFieldChange}
          />
        ) : null}

        <div
          style={{
            backgroundColor: "#71ccdf",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <TextField
            className={classes.customInputSectionField}
            id="outlined-basic6"
            label="Main Body (Required)"
            variant="filled"
            name="sectionTitle"
            size="small"
            disabled={true}
          />
          <div
            className="editor"
            style={{
              marginTop: "10px",
              color: "black",
            }}
          >
            <CKEditor
              editor={ClassicEditor}
              data={bodyText}
              onChange={(event, editor) => {
                const data = editor.getData();
                setBodyText(data);
              }}
            />
          </div>
        </div>

        {sectionCount > 0 &&
          sections.map((section) => (
            <div key={section.sectionId}>
              <AnnouncementSection
                section={section}
                sections={sections}
                setSections={setSections}
                handleDeleteSection={handleDeleteSection}
              />
            </div>
          ))}

        {announcementType === "tournament" && (
          <Button
            variant="contained"
            className={classes.addSectionButton}
            onClick={handleCreateNewSection}
          >
            Add Section
          </Button>
        )}

        {showModifyFormError ? (
          <div>Please make sure you entered a value for Name and URL.</div>
        ) : null}
        <div className={classes.buttonContainer}>
          <Row className={"no-gutters"}>
            <Col xl={6} xs={12}>
              <ColorButtonRed
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={handleModalClose}
                style={{ width: "90%" }}
              >
                Cancel
              </ColorButtonRed>
            </Col>
            <Col xl={6} xs={12}>
              <ColorButtonGreen
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={handleModifySubmit}
                style={{ width: "90%" }}
              >
                Submit
              </ColorButtonGreen>
            </Col>
          </Row>
        </div>
      </form>
    </>
  );
};

export default ModifyAnnouncement;
