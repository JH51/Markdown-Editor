import React from "react";
import "../styles/Toolbar.scss";

class Toolbar extends React.Component {
  render() {
    return (
      <div id="toolbar">
        <div className="toolbar-item">
          <button title="Undo">[</button>
        </div>
        <div className="toolbar-item">
          <button title="Redo">]</button>
        </div>
        <div className="toolbar-item">
          <button title="Bold">B</button>
        </div>
        <div className="toolbar-item">
          <button title="Italicize">I</button>
        </div>
        <div className="toolbar-item">
          <button title="Strikethrough">ST</button>
        </div>
        <div className="toolbar-item">
          <button title="Numbered List">NL</button>
        </div>
        <div className="toolbar-item">
          <button title="Bulleted List">UL</button>
        </div>
        <div className="toolbar-item">
          <button title="Checkboxes">CH</button>
        </div>
        <div className="toolbar-item">
          <button title="Inline Code">CB</button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
