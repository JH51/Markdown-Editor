import React from "react";
import storeEditorTextActionCreator from "../actions.js";
import { connect } from "react-redux";

class Editor extends React.Component {
  render() {
    const textarea = (
      <textarea
        id="editor-text"
        placeholder="# Header 1"
        value={this.props.editorText}
        rows={this.props.editorText.split('\n').length}
        onChange={() => {
          this.props.storeEditorText(
            document.getElementById("editor-text").value
          );
        }}
        autoFocus={true}
      ></textarea>
    );
    return (
      <div>
        {/* <h1>Editor Component</h1> */}
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
    storeEditorText: (text) => dispatch(storeEditorTextActionCreator(text)),
  };
};

export default connect(null, mapDispatchToProps)(Editor);
