import { Component } from "react";
class MyComponent extends Component {
  state = {
    num: 0,
  };

  handleClick() {
    this.setState((prev) => ({ num: prev.num + 1 }));
  }

  render() {
    return (
      <div>
        {this.state.num}
        <button onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    );
  }
}

export default MyComponent;
