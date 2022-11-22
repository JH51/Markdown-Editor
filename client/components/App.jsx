import React from "react";
import Header from './Header.jsx'
import Toolbar from "./Toolbar.jsx";
import EditorContainer from "./EditorContainer.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Header />
        <Toolbar />
        <EditorContainer />
      </div>
    );
  }
}

export default App;
