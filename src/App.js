import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addOne } from './redux/actions';
import { addCustomNumber } from './redux/actions';

class App extends Component {
  state={
    inputNumber: ""
  }

  onInputChange = (e) => {
    this.setState({inputNumber: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.number}</h1>
        <button 
          onClick={() => this.props.addOne()}
        >Click here to plus one</button>
        <br />
        <input value={this.state.inputNumber} onChange={this.onInputChange}/>
        <button onClick={() => this.props.addCustomNumber(Number(this.state.inputNumber))}
        >Click here to add</button>

        {/* <button onClick={() => this.props.dispatch(addCustomNumber(Number(this.state.inputNumber)))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addOne: () =>  dispatch(addOne()),
//     addCustomNumber: () => dispatch(addCustomNumber())
//   }
// }

export default connect(mapStateToProps, {addOne, addCustomNumber})(App);
