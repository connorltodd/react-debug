import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleCounter = () => {
    this.setState((prevState) => (
      { counter: prevState.counter + 1 }
    ));
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <h1>Counter</h1>
        <Counter counter={counter} />
        <button
          type="button"
          onClick={this.handleCounter}
        >
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
