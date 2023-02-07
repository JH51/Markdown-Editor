import React from "react";
import Toolbar from "../components/Toolbar.jsx";
import { connect } from "react-redux";

import { updateFilenameActionCreator } from "../actions.js";

class ToolbarContainer extends React.Component {

  render() {
    return (
      <div id="header-container">
        <Toolbar 
          filename={this.props.filename} 
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
  
export default connect(mapStateToProps, null)(ToolbarContainer);