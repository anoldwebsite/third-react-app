import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: 33 + this.props.increment //Adding the prop increment into our sum
    }
  }
  /*
  If you don't need to use the "this" like we have above then you don't need to pass props to 
  constructor and super and you even don't need to write so much code. You don't need to write
  the constructor. An alternative way to do this is:
    state = {
      sum: 33 
    }
  */
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {
        sum: prevState.sum + prevProps.increment
      }
    },
      () => console.log(this.state.sum)//This is the callback function which is passed as a second argument to the method setState
    );

  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.sum}</h2>
          <button onClick={this.handleClick}>Update the state</button>
        </header>
      </div>
    )
  }
}

export default App;
