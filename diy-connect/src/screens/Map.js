import React, { Component, Text } from 'react';
import { Grid, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import mapboxgl from 'mapbox-gl';



export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VhbmllYmxhbmNvIiwiYSI6ImNqZnJwcHQzMzE5cG4ycXNidmt2aThhOTcifQ.con-ZN9oPXhhP0J6NuyoVg';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/geanieblanco/cjfrqxpng6cll2sp12phn3zh2'
    });
  }

  render() {
    const style = {
      flex:3,
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '70%',
      height: '60vh',
      margin: 5
    };

    return (
      <div>
        <NavBar/>
        <Grid>
          <Row className="show-grid">
        <div style={style} ref={el => this.mapContainer = el} />
        </Row>
        </Grid>
      </div>
  );
  }
}
