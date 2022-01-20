import React, { useState } from "react";
import axios from "axios";
import Button from "../Utils/Button";
import serverIP from "../../Server";
import FileUploaderPaneContainer from "./StyledComponents/FileUploaderPaneContainer";
function FileUploaderPane(props) {
  /*
  1. setChat : a function to set the chat list for the chat pane
  2. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
  3. setLoading: a function to set the state of loading (true or false), when the api call is made
  4. loading: a flag to tell whether page is loading or not
  5. showAlert(msg,type) : a function which if called will show the alert
  6. setYou : which sets which person is "you"
  */

  const [chatFile, setChatFile] = useState(null);
  const [persons, setPersons] = useState(null);
  const handleChatFile = (event) => {
    setChatFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chatFile) {
      props.showAlert("Select a txt file!!", "danger");
      return;
    } else {
      props.showAlert("Uploading...", "primary");
    }
    let form_data = new FormData();
    form_data.append("chatfile", chatFile, chatFile.name);
    let url = `${serverIP}/api/wchat/`;
    props.setLoading(true);
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setPersons(res.data[0]);
        props.setChat(res.data[1]);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          props.showAlert("Unsupported File !!!", "danger");
        } else if (error.response.status === 500) {
          props.showAlert("Servor Error !!!", "danger");
        } else {
          props.showAlert("Some Error Occured !!!", "danger");
        }
      })
      .finally(() => {
        props.setLoading(false);
      });
  };
  const handleOnChange = (e) => {
    props.setYou(e.target.value);
  };
  return (
    <FileUploaderPaneContainer mode={props.mode}>
      <div className="container text-center">
        <div className="mb-3">
          <h3>WhatsApp Chat from Text File</h3>
        </div>
        <form>
          <p>
            <label>Open Text File</label>
            <br />
            <input
              type="file"
              id="chatfile"
              accept=".txt"
              onChange={handleChatFile}
              required
              style={{
                border: "1px solid gray",
                borderRadius: "3px",
                padding: "3px",
              }}
            />
          </p>

          <p>
            <label>Who are you?</label>
            <br />
            <select id="whoareyou" onChange={handleOnChange} defaultValue={""}>
              <option value="">--Select--</option>
              {persons
                ? persons.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                : ""}
            </select>
          </p>
          {props.loading ? (
            ""
          ) : (
            <Button
              btnText="Submit"
              mode={props.mode}
              btnType="success"
              onClick={handleSubmit}
            />
          )}
        </form>
      </div>
    </FileUploaderPaneContainer>
  );
}

export default FileUploaderPane;
