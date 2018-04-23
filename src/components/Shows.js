import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import showinfoData from './../data/showinfo';

class Show extends Component {
  constructor(props) {
     super(props);

     this.state = {
       showinfo: showinfoData
     };
   }

  render() {
    return (
      <section className='library'>
      {
        this.state.showinfo.map( (showinfo, index) =>
          <Link to={`/showinfo/${showinfo.slug}`} key={index}>
            <img src={showinfo.showCover} alt={showinfo.title} />
            <div>{showinfo.title}</div>
            <div>{showinfo.network}</div>
            <div>{showinfo.genre}</div>

            <br/>
          </Link>
        )}

    </section>
    );
  }
}

export default Show;
