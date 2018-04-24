import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import showinfoData from './../data/showinfo';

class Show extends Component {
  constructor(props) {
     super(props);

     this.state = {
       showinfo: showinfoData,
       newShow: ''
     };
   }

   handleChange(e) {
     this.setState({ newShow: e.target.value })
   }

   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newShow) { return }
     const newShow = { title: this.state.newShow, showCover: '/assets/comingsoon.png', slug: '#', network: 'Your submission will be reviewed!' };
     this.setState({ showinfo: [...this.state.showinfo, newShow], newShow:'' });
   }

  render() {
    return (
      <div className='library'>
      <p id="intro"><em>Click on a show to discover more information.</em></p>
      <br/>
      {this.state.showinfo.map( (showinfo, index) =>
          <div className="container">
          <div className="row justify-content-start">
          <div className="col-md">
          <div>
          <Link to={`/${showinfo.slug}`} key={index}>
            <img id="showart" class="shrink" src={showinfo.showCover} alt={showinfo.title} height="200px" padding-bottom="20px" /></Link>
            <h1>{showinfo.title}</h1>
            <div>{showinfo.network}</div>
            <div>{showinfo.genre}</div>
            </div>
          </div>
          </div>
          </div>
        )}

        <div id="suggestions">
         <h2>TV SHOW SUGGESTIONS</h2>
         <p>Liane needs a new television show to binge-watch!</p>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" placeholder=" Enter name of show here..."  value={ this.state.newShow } onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
          </form>
          </div>
    </div>

    );
  }
}

export default Show;
