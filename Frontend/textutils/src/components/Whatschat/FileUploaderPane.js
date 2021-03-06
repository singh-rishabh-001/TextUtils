import React, { useState } from "react";
import axios from "axios";
import Button from "../Utils/Button";
import serverIP from "../../Server";
import WhoAreYou from "./WhoAreYou";
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
  const [requestSent, setRequestSent] = useState(false);
  const handleChatFile = (event) => {
    setChatFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
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
    props.setLoading(1);
    setRequestSent(true);
    await axios
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
        try {
          if (error.response.status === 400) {
            props.showAlert("Unsupported File !!!", "danger");
          } else if (error.response.status === 500) {
            props.showAlert("Servor Error !!!", "danger");
          } else {
            props.showAlert("Some Error Occured !!!", "danger");
          }
        } catch (error) {
          props.showAlert("Server Down!!!, Please try later...", "danger");
        }
      })
      .finally(() => {
        props.setLoading(0);
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

          {props.loading || requestSent ? (
            <WhoAreYou
              onChange={handleOnChange}
              dropValues={persons}
              mode={props.mode}
            />
          ) : (
            <Button
              btnText="Get Conversation"
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
