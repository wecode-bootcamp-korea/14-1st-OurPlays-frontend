import React, { Component } from "react";
import MapElement from "./MapElement";
class MapContainer extends Component {
  render() {
    return (
      <MapElement
        id="Map"
        lon={this.props.lon && this.props.lon}
        lat={this.props.lat && this.props.lat}
      />
    );
  }
}

export default MapContainer;
