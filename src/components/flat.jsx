import React, { Component } from "react";

class Flat extends Component {
  handleClick = () => {
    this.props.selectFunction(this.props.lat, this.props.lng)
  }

  render () {
    return (
      <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.img})`
      }}>
        <div className="card-category">{this.props.price} EUR</div>
          <div className="card-description">
            <h2>{this.props.name}</h2>
          </div>
          <a className="card-link" title="link" href="#" onClick={this.handleClick}/>
    </div>
    );
  }
}

export default Flat;
