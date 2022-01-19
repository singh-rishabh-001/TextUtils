import React, { useState } from "react";
import axios from "axios";
import Button from "../Utils/Button";

function FileUploaderPane(props) {
  const [chatFile, setChatFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChatFile = (event) => {
    setChatFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("chatfile", chatFile, chatFile.name);
    let url = "http://localhost:8000/api/wchat/";
    setLoading(true);
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data);
        props.setChat(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div style={props.mode === "light" ? containerLight : containerDark}>
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
          <Button
            btnText="Submit"
            mode={props.mode}
            btnType="success"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
const containerLight = {
  background:
    "linear-gradient(90deg, rgba(231,230,255,1) 0%, rgba(241,241,255,1) 39%, rgba(206,247,255,1) 100%)",
  minHeight: "91vh",
  backgroundAttachment: "fixed",
  color: "black",
};
const containerDark = {
  background: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  minHeight: "91vh",
  backgroundAttachment: "fixed",
  color: "#cccccc",
};
export default FileUploaderPane;
