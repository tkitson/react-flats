import React, { Component } from "react";
import './application.scss';
import Flatlist from './flatlist';
import SimpleMap from "./googlemap";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 10.99835602,
      lng: 77.01502627
    }

    this.select();
  }

  select = (flat) => {
    this.setState({
      center: {lat: flat.lat, lng: flat.lng},
    });
  }


  render () {
    return (
      <div className="body">
        <div className="flat-list">
          <Flatlist selectFunction={this.select}/>
        </div>
        <div className='map-container'>
          <SimpleMap lat={this.state.lat} long={this.state.long}/>
        </div>
      </div>
    );
  };
}

export default App;
