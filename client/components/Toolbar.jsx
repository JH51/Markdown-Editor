import React from "react";
import { connect } from "react-redux";
import { storeEditorTextActionCreator } from "../actions.js";
import "../styles/Toolbar.scss";
const fileSaver = require("file-saver");

class Toolbar extends React.Component {
  render() {
    return (
      <div id="toolbar">
        <div className="toolbar-item">
          <button title="Open File">&#128194;</button>
        </div>
        <div className="toolbar-item">
          <button title="Undo">&#10558;</button>
        </div>
        <div className="toolbar-item">
          <button title="Redo">&#10559;</button>
        </div>
        <div className="toolbar-item">
          <button
            title="Bold"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "****";
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.selectionEnd -= 2;
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
              editorTextArea.value += "**";
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.selectionEnd -= 1;
              // editorTextArea.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
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
              editorTextArea.value += "~~~~";
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.selectionEnd -= 2;
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
              editorTextArea.value += "> ";
              this.props.storeEditorText();
              editorTextArea.focus();
            }}
          >
            &#8221;
          </button>
        </div>
        <div className="toolbar-item">
          <button title="Numbered List">1.&#x2013;</button>
        </div>
        <div className="toolbar-item">
          <button title="Bulleted List">&#x2022;&#x2013;</button>
        </div>
        <div className="toolbar-item">
          <button title="Checkboxes">&#10003;&#x2013;</button>
        </div>
        <div className="toolbar-item">
          <button
            title="Header"
            onClick={() => {
              const editorTextArea = document.getElementById("editor-text");
              editorTextArea.value += "#";
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
              editorTextArea.value += "``";
              this.props.storeEditorText();
              editorTextArea.focus();
              editorTextArea.selectionEnd -= 1;
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
              console.log("Downloading README.md");
              fileSaver.saveAs(new Blob([editorTextArea.value]), "README.md");
            }}
          >
            <u>&darr;</u>
          </button>
        </div>
        <div id="fetch-page-button" className="toolbar-item">
          <button title="GitHub">Fetch README.md from GitHub</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {

//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    storeEditorText: () => dispatch(storeEditorTextActionCreator()),
  };
};

export default connect(null, mapDispatchToProps)(Toolbar);
// export default Toolbar;
