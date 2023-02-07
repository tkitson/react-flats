import React, { Component } from "react";
import './application.scss';
import Flatlist from './flatlist';
import SimpleMap from "./googlemap";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 40.99835602,
      lng: 37.01502627
    }

    this.select();
  }

  select = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  }


  render () {
    return (
      <div className="body">
        <div className="flat-list">
          <Flatlist selectFunction={this.select}/>
        </div>
        <div className='map-container'>
          <SimpleMap lat={this.state.lat} lng={this.state.lng}/>
        </div>
      </div>
    );
  };
}

export default App;
