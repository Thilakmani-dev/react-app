import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

import { FileExplorer } from "../components/FileExplorer";
import { useState } from "react";

import { MOCK_DATA } from "./MockData.js";

import { insertNode } from "./hooks.js";

export const NavBar = () => {
  const { toggleTheme } = useTheme();

  const [fileExplorerData, setFileExplorerData] = useState(MOCK_DATA);

  function handleAdd(id, item, isFolder) {
    let newTree = insertNode(fileExplorerData, id, item, isFolder);
    setFileExplorerData(newTree);
  }

  return (
    <>
      <nav className="navBar">
        <div>Logo</div>
        <ul className="navBarMenus">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/comment">Comments</Link>
          </li>
          <li>
            <Link to="/shop">Shopping</Link>
          </li>
          <li>
            <button onClick={toggleTheme}>Toggle theme</button>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <FileExplorer file={MOCK_DATA} handleAdd={handleAdd} />
    </>
  );
};
