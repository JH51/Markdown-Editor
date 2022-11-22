import React from "react";
import '../styles/Toolbar.scss';

class Toolbar extends React.Component {
  render() {
    return (
        <div className="toolbar">
          <div className="toolbar-item">
            <button>Undo</button>
          </div>
          <div className="toolbar-item">
            <button>Redo</button>
          </div>
          <div className="toolbar-item">
            <button>Bold</button>
          </div>
          <div className="toolbar-item">
            <button>Italicize</button>
          </div>
          <div className="toolbar-item">
            <button>Strikethrough</button>
          </div>
          <div className="toolbar-item">
            <button>Ordered List</button>
          </div>
          <div className="toolbar-item">
            <button>Unordered List</button>
          </div>
          <div className="toolbar-item">
            <button>Checkboxes</button>
          </div>
          <div className="toolbar-item">
            <button>Code Block</button>
          </div>
        </div>
    );
  }
}

export default Toolbar;
