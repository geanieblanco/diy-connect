import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Preview from '../components/PostPreview';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Search extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <Grid style={{
              marginTop: '10vh',
              paddingLeft: 50
            }}>
            <Row>
            <Preview/>
            </Row>
        </Grid>
      </div>
    )
  }
}
