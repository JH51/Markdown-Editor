import React from "react";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";

class EditorContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Editor Container</h1>
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default EditorContainer;
