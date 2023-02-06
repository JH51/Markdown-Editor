import React from "react";
import Header from "./components/Header.jsx";
import Toolbar from "./components/Toolbar.jsx";
import FetchModal from "./components/FetchModal.jsx";
import EditorContainer from "./containers/EditorContainer.jsx";
import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="header-components">
          <Header />
          <Toolbar />
        </div>
        <EditorContainer />
        <FetchModal />
      </div>
    );
  }
}

export default App;
