import React, { useState } from "react";
import axios from "axios";

function FileUploaderPane(props) {
  const [chatFile, setChatFile] = useState(null);

  const handleChatFile = (event) => {
    setChatFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("chatfile", chatFile, chatFile.name);
    let url = "http://localhost:8000/api/wchat/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        props.setChat(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={props.mode === "light" ? containerLight : containerDark}>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="file"
            id="chatfile"
            accept=".txt"
            onChange={handleChatFile}
            required
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}
const containerLight = {
  background:
    "linear-gradient(90deg, rgba(231,230,255,1) 0%, rgba(241,241,255,1) 39%, rgba(206,247,255,1) 100%)",
  minHeight: "91vh",
  backgroundAttachment: "fixed",
};
const containerDark = {
  background:
    "linear-gradient(90deg, rgba(11,11,11,1) 0%, rgba(39,40,41,1) 100%)",
  minHeight: "91vh",
  backgroundAttachment: "fixed",
};

export default FileUploaderPane;
