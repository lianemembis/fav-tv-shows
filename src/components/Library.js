import React, { Component } from 'react';
import showinfoData from './../data/showinfo';
import { Link } from 'react-router-dom';

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
          <div className="container">
          <section className="library">
            <section id="showinfo-info">
              <img id="showinfo-cover-art" src={this.state.showinfo.showCover} />
              <div className="showinfo-details">
                <h1 id="showinfo-title">{this.state.showinfo.title}</h1>
                <h2 className="actress">Starring: {this.state.showinfo.actress}</h2>
              <div id="network">{this.state.showinfo.network}</div>

              <p className="description">{this.state.showinfo.description}</p>
                 <Link to="/">Watch more TV</Link>
           </div>
            </section>
          </section>
          </div>
        );
    }
}

export default Library;
