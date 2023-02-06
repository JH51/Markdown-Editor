import React from "react";
import { connect } from 'react-redux';
import styles from '../styles/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div id="react-header">
        <p>
          <span id="filename">README.md</span>
          {/* <span id="src-repo">github.com/user/repo/blob/main/readme.md </span> */}
          {/* <span id="src-repo" hidden>github.com/{this.props.user}/{this.props.repo}/blob/{this.props.branch}/{this.props.filename}</span> */}
          <span id="src-repo">{this.props.url}</span>
          <span id="save-history">Last saved 2 minutes ago </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const copyOfState = {
    user: state.user,
    repo: state.repo,
    branch: state.branch,
    filename: state.filename,
    url: state.url,
  };
  return copyOfState;

}

export default connect(mapStateToProps, null)(Header);
