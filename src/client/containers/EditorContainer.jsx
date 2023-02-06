import React from "react";
import Editor from "../components/Editor.jsx";
import Preview from "../components/Preview.jsx";
import '../styles/EditorContainer.scss';
import { connect } from "react-redux";

class EditorContainer extends React.Component {
  render() {
    return (
      <div id="react-editor-container">
        <Editor editorText={this.props.editorText} />
        <div id="arrow">&rarr;</div>
        <Preview previewText={this.props.previewText} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editorText: state.reducer.editorText,
    previewText: state.reducer.previewText,
  };
};

export default connect(mapStateToProps, null)(EditorContainer);
