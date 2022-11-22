import React from "react";
import styles from '../styles/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div id="react-header">
        <p>
          <span id="filename">README.md </span>
          <span id="src-repo">github.com/user/repo/blob/main/readme.md </span>
          <span id="save-history">Last saved 2 minutes ago </span>
        </p>
      </div>
    );
  }
}

export default Header;
