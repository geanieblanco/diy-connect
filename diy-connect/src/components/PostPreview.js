import React, { Component, Text } from 'react';
import { Panel } from 'react-bootstrap';

export default class Preview extends Component {
  render() {
    return(
      <div>
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title
              componentClass="h3"
              style={{
              fontFamily: "'Press Start 2P', cursive"
              }}>Space for 4 near New York City</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span><span style={{fontWeight:4}}>Location:</span> Bayonne, NJ <span style={{fontWeight:10}}> | Rating:</span> ***</span>
            <p><h4>Description:</h4> One small couch, can fit 2 if you're okay with cuddling. Floor area and air mattress available. Please give me at least 1 day's notice. Street parking free from 9pm-7am.</p>
            <a href="#">Contact Poster</a>
          </Panel.Body>
        </Panel>

        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title
              componentClass="h3"
              style={{
              fontFamily: "'Press Start 2P', cursive"
              }}>Free Vegan Meal in Witchita, KA</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span><span style={{fontWeight:4}}>Location:</span> Witchita, KA <span style={{fontWeight:10}}> | Rating:</span> ***</span>
            <p><h4>Description:</h4> Please contact at least 1 day in advance to confirm time and any additional allergies (NOT celiac friendly, can do basic gluten free). I have a cat.</p>
            <a href="#">Contact Poster</a>
          </Panel.Body>
        </Panel>

        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title
              componentClass="h3"
              style={{
              fontFamily: "'Press Start 2P', cursive"
            }}>Free Showers Avail after 6pm</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span><span style={{fontWeight:4}}>Location:</span> Aurora, IL <span style={{fontWeight:10}}> | Rating:</span> ***</span>
            <p><h4>Description:</h4> Once I'm back from work I have one large shower available. Must provide own toiletries and towels. Laundry available in the basement also.</p>
            <a href="#">Contact Poster</a>
          </Panel.Body>
        </Panel>

        <Panel bsStyle="warning">
          <Panel.Heading>
            <Panel.Title
              componentClass="h3"
              style={{
              fontFamily: "'Press Start 2P', cursive"
            }}>Access to Private Coin Operated Washer/Dryer</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span><span style={{fontWeight:4}}>Location:</span> Baldwinsville, NY <span style={{fontWeight:10}}> | Rating:</span> ***</span>
            <p><h4>Description:</h4> I can let you in to my building for access to the $.25 washer/dryer, cheaper than laundry in the area (around $1.50). </p>
            <a href="#">Contact Poster</a>
          </Panel.Body>
        </Panel>

        <Panel bsStyle="danger">
          <Panel.Heading>
            <Panel.Title
              componentClass="h3"
              style={{
              fontFamily: "'Press Start 2P', cursive"
            }}>Mechanic</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span><span style={{fontWeight:4}}>Location:</span> Greenville, SC <span style={{fontWeight:10}}> | Rating:</span> ***</span>
            <p><h4>Description:</h4> Can do cheap oil changes and inspections for tour vehicles. Excellent discount on any emergency services. Call (555)555-5555 for emergency assistance in the Greenville area.</p>
            <a href="#">Contact Poster</a>
          </Panel.Body>
        </Panel>
      </div>

    )
}
}
