import React from "react";
import FetchModal from "./components/FetchModal.jsx";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import EditorContainer from "./containers/EditorContainer.jsx";
import ToolbarContainer from "./containers/ToolbarContainer.jsx";
import './styles/App.scss';


class App extends React.Component {
  render() {
    return (
      <div>
        <div id="header-components">
          <HeaderContainer />
          <ToolbarContainer />
        </div>
        <EditorContainer />
        <FetchModal />
      </div>
    );
  }
}

export default App;
