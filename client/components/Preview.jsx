import React from "react";
import { connect } from "react-redux";

class Preview extends React.Component {
  render() {
    console.log(this.props.previewText);
    return (
      <div>
        <h1>Preview Component</h1>
        <textarea id="preview-text" value={this.props.previewText}></textarea>
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
