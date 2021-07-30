import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import UploadAdapter from "./UploadAdapter";
// import parse from "html-react-parser";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#71ccdf",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "10px",
    textAlign: "left",
  },
  customInputSectionField: {
    borderRadius: 5,
    color: "#071a33",
    backgroundColor: "white",
    fontWeight: "bold",
    width: "90%",
  },
  customDeleteButton: {
    marginLeft: "10px",
    color: "#071a33",
    backgroundColor: "#bf5858",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(191,88,88,0.7)",
    },
  },
});

const AnnouncementSection = ({
  section,
  sections,
  setSections,
  handleDeleteSection,
}) => {
  const classes = useStyles();

  function handleAddNewSectionTitle(event) {
    const { name, value } = event.target;
    const tempSections = [...sections];
    tempSections[section.sectionId] = {
      sectionId: section.sectionId,
      sectionTitle: value,
      sectionBody: section.sectionBody,
    };
    setSections(tempSections);
  }

  function handleAddNewSectionBody(event, editor) {
    const data = editor.getData();
    const tempSections = [...sections];
    tempSections[section.sectionId] = {
      sectionId: section.sectionId,
      sectionTitle: section.sectionTitle,
      sectionBody: data,
    };
    setSections(tempSections);
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.customInputSectionField}
        id={section.sectionId.toString()}
        label="Section Title"
        variant="filled"
        name="title"
        size="small"
        value={section.sectionTitle}
        onChange={handleAddNewSectionTitle}
      />
      <Tooltip
        title="Delete Section"
        aria-label="delete section"
        placement="top"
      >
        <IconButton
          aria-label="delete"
          className={classes.customDeleteButton}
          onClick={() => handleDeleteSection(section.sectionId)}
        >
          <DeleteIcon className={classes.customIcons} />
        </IconButton>
      </Tooltip>
      <div
        className="editor"
        style={{
          marginTop: "10px",
          color: "black",
        }}
      >
        <CKEditor
          editor={ClassicEditor}
          data={section.sectionBody}
          onReady={(editor) => {
            editor.plugins.get("FileRepository").createUploadAdapter = (
              loader
            ) => {
              return new UploadAdapter(loader);
            };
          }}
          onChange={handleAddNewSectionBody}
        />
      </div>
    </div>
  );
};

export default AnnouncementSection;
