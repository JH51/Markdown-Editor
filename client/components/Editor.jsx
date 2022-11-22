import React from "react";
import storeEditorTextActionCreator from "../actions.js";
import { connect } from "react-redux";

class Editor extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1>Editor Component</h1>
        <textarea
          id="editor-text"
          onChange={() => {
            this.props.storeEditorText(document.getElementById("editor-text").value);
            console.log(this.props);
          }}
          value={this.props.editorText}
        ></textarea>
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
