import React from "react";
import ReactDOM from "react-dom";

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>Welcome to the React Application</h4>
      </div>
    );
  }
}

ReactDOM.render(<MainComponent />, document.getElementById("App"));

module.hot.accept();
