/* eslint-disable react/prop-types */
import { useState } from "react";

import "./FileExplorer.css";

export const FileExplorer = (props) => {
  const { file, handleAdd = () => {} } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const [isShowInput, setIsShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const handleCreate = (e, isFolder) => {
    e.stopPropagation();
    setIsExpanded(true);
    setIsShowInput({ isVisible: true, isFolder });
  };

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleAdd(file.id, e.target.value, isShowInput.isFolder);
      setIsShowInput({ ...isShowInput, isVisible: false });
    }
  };

  return file.isFolder ? (
    <div className="fileExplorer">
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <div className="folder">
          <p>&#128193; {file.name}</p>
          <div>
            <button
              style={{ marginInline: "5px" }}
              onClick={(e) => handleCreate(e, true)}
            >
              Folder +
            </button>
            <button
              style={{ marginInline: "5px" }}
              onClick={(e) => handleCreate(e, false)}
            >
              File +
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: isExpanded ? "block" : "none",
          paddingRight: "25px",
        }}
      >
        {isShowInput.isVisible &&
          (isShowInput.isFolder ? (
            <p>
              &#128193;{" "}
              <input
                type="text"
                autoFocus
                onBlur={() =>
                  setIsShowInput({ ...isShowInput, isVisible: false })
                }
                onKeyDown={addFolder}
              />
            </p>
          ) : (
            <p>
              &#128462;{" "}
              <input
                type="text"
                autoFocus
                onBlur={() =>
                  setIsShowInput({ ...isShowInput, isVisible: false })
                }
                onKeyDown={addFolder}
              />
            </p>
          ))}
        {file.items.map((item) => (
          <FileExplorer file={item} key={item.id} handleAdd={handleAdd} />
        ))}
      </div>
    </div>
  ) : (
    <p>&#128462; {file.name}</p>
  );
};
