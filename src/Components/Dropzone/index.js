import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Dropzone.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const Dropzone = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    fetch("link", {
      method: "POST",
      body: formData,
    });
  };
  function formatBytes(bytes) {
    const sizes = ["Bytes", "KB", "MB"];

    if (bytes === 0) return "0 Byte";

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
  }

  if (files)
    return (
      <div className={cx("wrapper")}>
        <div className={cx("main-content")}>
          <div className={cx("introduce")}>TẢI TỆP LÊN</div>
          <div className={cx("uploads")}>
            <ul>
              {Array.from(files).map((file, idx) => (
                <li key={idx}>
                  {file.name} - {formatBytes(file.size)}
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("actions")}>
            <button className={cx("cancel")} onClick={() => setFiles(null)}>
              HỦY
            </button>
            <button className={cx("Upload")} onClick={handleUpload}>
              XÁC NHẬN
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <>
      {" "}
      <div className={cx("wrapper")}>
        <div className={cx("main-content")}>
          <div className={cx("introduce")}>TẢI TỆP LÊN</div>
          <div
            className={cx("drop")}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <FontAwesomeIcon icon={faCloudArrowUp} className={cx("icon")} />
            <h1>Drop Your Files Here</h1>
            <h1>Or</h1>
            <input
              type="file"
              multiple
              onChange={(event) => setFiles(event.target.files)}
              hidden
              accept="application/pdf, 
              application/vnd.openxmlformats-officedocument.wordprocessingml.document,
              image/png, 
              image/jpeg"
              ref={inputRef}
            />
            <button onClick={() => inputRef.current.click()}>
              Browse from your computer
            </button>
            <h3>Maximum size 10MB.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropzone;
