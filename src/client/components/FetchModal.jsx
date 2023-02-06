import React from "react";
import { connect } from "react-redux";
import { fetchReadMeActionCreator, updateQueriesActionCreator } from "../actions.js";
import "../styles/FetchWindow.scss";

class FetchModal extends React.Component {

  render() {
    return (
      <div id="fetch-overlay">
        <div id="fetch-popup">
          {/* <h1>THIS IS THE FETCH POPUP</h1> */}
          <div id="input-row">
            <span id="input-domain">http://raw.githubusercontent.com</span>/
            <input
              id="input-user"
              type="text"
              placeholder="user"
              onChange={this.props.updateQueries}
            ></input>
            /
            <input
              id="input-repo"
              type="text"
              placeholder="repo"
              onChange={this.props.updateQueries}
            ></input>
            /
            <input
              id="input-branch"
              type="text"
              placeholder="branch"
              onChange={this.props.updateQueries}
            ></input>
            /
            <input
              id="input-filename"
              type="text"
              value="README.md"
              onChange={this.props.updateQueries}
            ></input>
          </div>
          <div id="button-row">
            <button
              id="button-fetch"
              onClick={() => {
                console.log("Fetch");
                this.props.fetchReadMe();
                // setTimeout(this.props.storeEditorText, 500);
                // setTimeout(this.props.updateHeader, 500);
                // this.props.storeEditorText()
                const overlay = document.getElementById("fetch-overlay");
                overlay.style.opacity = "0";
                overlay.style.visibility = "hidden";
              }}
            >
              Fetch
            </button>
            <button
              id="button-cancel"
              onClick={() => {
                const overlay = document.getElementById("fetch-overlay");
                overlay.style.opacity = "0";
                overlay.style.visibility = "hidden";
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReadMe: () => dispatch(fetchReadMeActionCreator()),
    storeEditorText: () => dispatch(storeEditorTextActionCreator()),
    updateHeader: () => dispatch(updateHeaderActionCreator()),
    updateQueries: () => dispatch(updateQueriesActionCreator()),
  };
};

export default connect(null, mapDispatchToProps)(FetchModal);
