import React from "react";
import styles from '../styles/Header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  handleUpdateFilename = (e) => {
    this.props.updateFilename(e.target.value);
  };

  render() {
    return (
      <div id="react-header">
        <p>
          <input type="text" id="filename" value={this.props.filename} onChange={this.handleUpdateFilename}/>
          <span id="save-history">Last saved 2 minutes ago </span>
        </p>
      </div>
    );
  }
}

export default Header;
