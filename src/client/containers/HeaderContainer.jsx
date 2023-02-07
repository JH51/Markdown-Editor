import React from "react";
import Header from "../components/Header.jsx";
import { connect } from "react-redux";

import { updateFilenameActionCreator } from "../actions.js";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div id="header-container">
        <Header 
          filename={this.props.filename} 
          updateFilename={this.props.updateFilename}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filename: state.reducer.filename,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilename: (newFilename) => dispatch(updateFilenameActionCreator(newFilename)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
