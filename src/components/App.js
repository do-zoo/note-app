import React from "react";
import NoteLists from "./Note/NoteLists";
import SideBar from "./SideBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: "unarchive",
      isSideBarOpen: false,
    };

    this.onChangeContentType = this.onChangeContentType.bind(this);
    this.onChangeSideBar = this.onChangeSideBar.bind(this);
  }

  onChangeContentType(type) {
    this.setState({
      contentType: type,
    });
  }

  onChangeSideBar() {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen,
    });
  }

  render() {
    return (
      <div className="relative w-auto min-h-screen bg-base-color text-quaternary-color flex">
        <SideBar
          onChangeContentType={this.onChangeContentType}
          type={this.state.contentType}
          isSideBarOpen={this.state.isSideBarOpen}
          onClickSideBar={this.onChangeSideBar}
        />
        <NoteLists type={this.state.contentType} />
      </div>
    );
  }
}

export default App;
