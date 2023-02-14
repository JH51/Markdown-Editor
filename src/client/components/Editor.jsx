import React from "react";
import { storeEditorTextActionCreator, updateUndoStackActionCreator } from "../actions.js";
import { connect } from "react-redux";
import "../styles/Editor.scss";

class Editor extends React.Component {

  // timer = setTimeout(() => {
  //   this.props.updateUndoStack()
  //   console.table(this.props.editorText)
  // }, 1000)

  constructor() {
    super();
    this.timerActive = false;
  }

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
          // Once user starts typing, update present and past
          if (! this.timerActive) this.props.updateUndoStack();
          this.props.storeEditorText();
          this.timerActive = true;
          // Start a timer that disables further updating
          setTimeout(() => {
            this.timerActive = false;
          }, 1000)

          // this.timer = setTimeout(() => {
          //   this.props.updateUndoStack()
          //   console.table(this.props.editorText)
          // }, 1000)
          // clearTimeout(this.timer)
          // this.props.storeEditorText();
          // this.timer = setTimeout(() => {
          //   this.props.updateUndoStack()
          //   console.table(this.props.editorText)
          // }, 1000)
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
    updateUndoStack: () => dispatch(updateUndoStackActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
