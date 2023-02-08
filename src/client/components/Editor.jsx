import React from "react";
import { storeEditorTextActionCreator } from "../actions.js";
import { connect } from "react-redux";
import "../styles/Editor.scss";

class Editor extends React.Component {
  render() {
    const textarea = (
      <textarea
        id="editor-text"
        placeholder="# Header 1"
        value={this.props.editorText.present}
        style={{
          height: document.getElementById("editor-text")
            ? document.getElementById("editor-text").scrollHeight + "px"
            : "auto",
        }}
        onFocus={() => {
          let selectionStart =
            document.getElementById("editor-text").selectionStart;
          let selectionEnd =
            document.getElementById("editor-text").selectionEnd;
          console.log(selectionStart, selectionEnd);
        }}
        onChange={() => {
          this.props.storeEditorText();
          this.style={
            height: document.getElementById("editor-text")
              ? document.getElementById("editor-text").scrollHeight + "px"
              : "auto",
          }
        }}
        autoFocus={true}
      ></textarea>
    );
    return (
      <div id="editor">
        {textarea}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editorText: state.reducer.editorText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeEditorText: () => dispatch(storeEditorTextActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
