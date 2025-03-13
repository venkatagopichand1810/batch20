//counter example using the class in react...class component

import { Component } from "react";

//to maintin the state of the application we have to class component called statefull compoennt(react 16)
class App extends Component {

  constructor(){
    super();
    // define the state
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }

}

export default App