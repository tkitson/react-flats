import React, { Component } from 'react';
import Flat from './flat';
import flats from './flats';

class Flatlist extends Component {

  renderList = () => {
    return flats.map(flat => {
      return <Flat img={flat.imageUrl} price={flat.price} name={flat.name} selectFunction={this.props.selectFunction}/>
    })
  }
  render () {
    return (
      <>
        {this.renderList()}
      </>
    )
  }

}

export default Flatlist;
