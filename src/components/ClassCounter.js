import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

	// State variable
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
	this.setState(prevState => {
		return {
			count: prevState + 1
		}
	})
  }

  render() {
    return <div>
		<button onClick={this.incrementCount}>Count {this.state.count}</button>
	</div>;
  }
}

export default ClassCounter;
