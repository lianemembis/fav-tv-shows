import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Shows from './components/Shows';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <h1 id="headline">YOU ARE N<img src='/assets/blink.gif' height='40px' margin-top='-15px'/>W WATCHING MY TV</h1>
        </header>
        <main>
        <Route exact path="/" component={Shows} />
        <Route path="/:slug" component={Library} />

        </main>
        </div>
    );
  }
}

export default App;
