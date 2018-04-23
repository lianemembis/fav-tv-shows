import React, { Component } from 'react';
import showinfoData from './../data/showinfo';
import { Route, Link } from 'react-router-dom';

class Library extends Component {
   constructor(props) {
     super(props);

     const showinfo = showinfoData.find( showinfo => {
       return showinfo.slug === this.props.match.params.slug
     });

     this.state = {
       showinfo: showinfo
     };
   }

   render() {
        return (
          <section className="library">
            {this.props.match.params.slug}
            <section id="showinfo-info">
              <img id="showinfo-cover-art" src={this.state.showinfo.showCover} />
              <div className="showinfo-details">
                <h1 id="showinfo-title">{this.state.showinfo.title}</h1>
                <p> Link to trailer </p>
                <h2 className="actress">{this.state.showinfo.actress}</h2>
              <div id="network">{this.state.showinfo.network}</div>

              <p className="description">{this.state.showinfo.description}</p>
                 <Link to="/">Watch more TV</Link>
           </div>
            </section>
          </section>
        );
    }
}

export default Library;
