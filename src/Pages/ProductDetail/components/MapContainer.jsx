import React, { Component } from "react";
import MapElement from "./MapElement";
class MapContainer extends Component {
  render() {
    console.log(this.props);
    return <MapElement id="Map" lon={this.props.lon} lat={this.props.lat} />;
  }
}

export default MapContainer;
