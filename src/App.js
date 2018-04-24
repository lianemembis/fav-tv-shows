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
        <h1>YOU ARE N<img src={require('./assets/u_eye_gif.gif')} height='100px' margin-top='-15px'/>W WATCHING MY TV</h1>
        </header>
        <main>
        <Route exact path="/" component={Shows} />
        <Route path="/showinfo/:slug" component={Library} />

        </main>
        </div>
    );
  }
}

export default App;
