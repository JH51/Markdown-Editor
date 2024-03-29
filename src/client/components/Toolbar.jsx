import React from "react";
import { connect } from "react-redux";
import {
  fetchReadMeActionCreator,
  storeEditorTextActionCreator,
  updateHeaderActionCreator,
  redirectToGitHubOauthActionCreator,
  undoEditorTextActionCreator,
  redoEditorTextActionCreator,
  updateUndoStackActionCreator
} from "../actions.js";
import "../styles/Toolbar.scss";
const fileSaver = require("file-saver");

class Toolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="toolbar">
        <div className="toolbar-item">
          <button title="Open File">&#128194;</button>
        </div>
        <div className="toolbar-item">
          <button 
            title="Undo"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              if (this.props.editorText.past.length > 0) {
                this.props.undoEditorText();
              }
              editorTextArea.focus();
            }}
          >
            &#8617;
          </button>
        </div>
        <div className="toolbar-item">
          <button 
            title="Redo"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              if (this.props.editorText.future.length > 0) {
                this.props.redoEditorText();
              }
              editorTextArea.focus();
            }}
          >
            &#8618;
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Bold"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "** **";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 3,
                editorTextArea.selectionEnd - 2
              );
            }}
          >
            <strong>B</strong>
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Italicize"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "* *";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 2,
                editorTextArea.selectionEnd - 1
              );
            }}
          >
            <em>I</em>
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Strikethrough"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "~~ ~~";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 3,
                editorTextArea.selectionEnd - 2
              );
            }}
          >
            <strike>S</strike>
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Quote"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += ">  ";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 1,
                editorTextArea.selectionEnd
              );
            }}
          >
            &#8221;
          </button>
        </div>
        <div className="toolbar-item">
          <button title="Numbered List">1.&#x2013;</button>
        </div>
        <div className="toolbar-item">
          <button
            title="Bulleted List"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "\n*  ";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 1,
                editorTextArea.selectionEnd
              );
            }}
          >
            &#x2022;&#x2013;
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Checkboxes"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "\n- [ ]  ";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 1,
                editorTextArea.selectionEnd
              );
            }}
          >
            &#10003;&#x2013;
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Header"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "#";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
            }}
          >
            <strong>
              <u>H</u>
            </strong>
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Inline Code"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "` `";
              this.props.updateUndoStack()
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.setSelectionRange(
                editorTextArea.selectionStart - 2,
                editorTextArea.selectionEnd - 1
              );
            }}
          >
            &#60;&#62;
          </button>
        </div>
        <div className="toolbar-item">
          <button
            title="Download README.md"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              fileSaver.saveAs(new Blob([editorTextArea.value]), `${this.props.filename}`);
            }}
          >
            <u>&darr;</u>
          </button>
        </div>
        <div id="fetch-readme-button" className="toolbar-item">
          <button
            title="Fetch README.md from GitHub"
            onClick={() => {
              const overlay = document.getElementById("fetch-overlay");
              overlay.style.visibility = "visible";
              overlay.style.opacity = 1;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </div>
        <div id="github-login" className="toolbar-item">
          <button
            onClick={() => {
              console.log("Fetch");
              this.props.redirectToGitHubOath();
            }}
          >
            Login with GitHub
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user,
    repo: state.reducer.repo,
    branch: state.reducer.branch,
    filename: state.reducer.filename,
    editorText: state.reducer.editorText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReadMe: () => dispatch(fetchReadMeActionCreator()),
    redirectToGitHubOath: () => dispatch(redirectToGitHubOauthActionCreator()),
    storeEditorText: () => dispatch(storeEditorTextActionCreator()),
    updateHeader: () => dispatch(updateHeaderActionCreator()),
    undoEditorText: () => dispatch(undoEditorTextActionCreator()),
    redoEditorText: () => dispatch(redoEditorTextActionCreator()),
    updateUndoStack: () => dispatch(updateUndoStackActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
