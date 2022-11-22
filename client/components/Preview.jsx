import React from "react";
import { connect } from "react-redux";
import '../styles/Preview.scss'

class Preview extends React.Component {
  render() {
    try {
      document.getElementById('preview').innerHTML = this.props.previewText;
    }
    catch {

    }
    return (
      <div id="preview">
        {/* <h1>Preview Component</h1> */}
        <textarea id="preview-text" value={this.props.previewText}>
        </textarea>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    previewText: state.reducer.previewText,
  };
};

export default connect(mapStateToProps)(Preview);
