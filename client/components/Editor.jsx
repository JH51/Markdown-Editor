import React from "react";
import storeEditorTextActionCreator from "../actions.js";
import { connect } from "react-redux";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <h1>Editor Component</h1>
        <textarea
          id="editor-text"
          onChange={() => {
            this.props.storeEditorText(document.getElementById("editor-text").value);
            // console.log("Editor text changed");
          }}
        ></textarea>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeEditorText: (text) => dispatch(storeEditorTextActionCreator(text)),
  };
};

export default connect(null, mapDispatchToProps)(Editor);
