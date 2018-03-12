import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { store, view } from 'react-easy-state'

function printHello() {
  return <span>Hello</span>
}

function printHi() {
  return <span>Hi</span>
}

const hack_enabled = false

const mystore = store({displayFunction: printHello})

class App extends Component {
  render() {
    // FIXME remove this hack
    if (hack_enabled)
      console.log(mystore.foobarTweak)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={(e) => {
          mystore.displayFunction = printHello

          // FIXME remove this hack
          if (hack_enabled)
            mystore.foobarTweak = "hello"
        }}>Say Hello</button>
        <button onClick={(e) => {
          mystore.displayFunction = printHi

          // FIXME remove this hack
          if (hack_enabled)
            mystore.foobarTweak = "hi"
        }}>Say Hi</button>

        <p>{mystore.displayFunction()}, World!</p>
      </div>
    );
  }
}

export default view(App);
