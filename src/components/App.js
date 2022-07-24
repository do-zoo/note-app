import React from "react";
import NoteLists from "./Note/NoteLists";
import SideBar from "./SideBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: "archive",
    };

    this.onChangeContentType = this.onChangeContentType.bind(this);
  }

  onChangeContentType(type) {
    this.setState({
      contentType: type,
    });
  }

  render() {
    return (
      <div className="relative w-auto min-h-screen bg-base-color text-quaternary-color flex">
        <SideBar
          className=" hidden md:block w-[300px]"
          onChangeContentType={this.onChangeContentType}
          type={this.state.contentType}
        />
        <NoteLists type={this.state.contentType} />
      </div>
    );
  }
}

export default App;
