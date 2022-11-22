import React from "react";
import Header from "./Header.jsx";
import Toolbar from "./Toolbar.jsx";
import EditorContainer from "./EditorContainer.jsx";
import styles from '../styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>App Component</h1> */}
        <div id="header-components" style={styles}>
          <Header />
          <Toolbar />
        </div>
        <EditorContainer />
      </div>
    );
  }
}

export default App;
