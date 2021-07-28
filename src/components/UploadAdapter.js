// import { firebase } from "../utilities/firebase";
import { storage } from "../firebase";

class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          // firebase reference
          let uploadTask = storage
            .ref()
            .child(`announcement_images/${file.name}`)
            .put(file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              /* snapshot with info about 
                            the upload progress & metadata */
            },
            (error) => {
              // error handling
            },
            () => {
              // upload successful
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                resolve({
                  default: downloadURL,
                });
              });
            }
          );
        })
    );
  }
}

export default UploadAdapter;
