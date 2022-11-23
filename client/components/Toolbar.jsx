import React from "react";
import "../styles/Toolbar.scss";

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
          <button title="Bold"><strong>B</strong></button>
        </div>
        <div className="toolbar-item">
          <button title="Italicize"><em>I</em></button>
        </div>
        <div className="toolbar-item">
          <button title="Strikethrough"><strike>S</strike></button>
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
          <button title="Header"
          onClick={() => {
            const editorTextArea = document.getElementById("editor-text");
            editorTextArea.value += '#'
            console.log(editorTextArea);
          }
        }><strong><u>H</u></strong></button>
        </div>
        <div className="toolbar-item">
          <button title="Inline Code">&#60;&#62;</button>
        </div>
        <div className="toolbar-item">
          <button title="Download README.md"><u>&darr;</u></button>
        </div>
        <div id="fetch-page-button" className="toolbar-item">
          <button title="GitHub">Fetch README.md from GitHub</button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
