import React, { Component, Text } from 'react';
import NavBar from '../components/NavBar';
import SignUp from '../components/SignUp';
import Search from './Search';
import Account from './Account';
import { Grid, Row, Col } from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return(
      <div>
        <div>
          <NavBar/>
        </div>
        <div>
          <Grid style={{
              marginTop: '10vh'
            }}>
            <Row className="show-grid"
              >
              <Col
                fluid="true"
                sm={6}
                m={4}>
                <h3 style={{
                    backgroundColor: 'rgb(204,249,207)',
                    padding:5,
                    fontFamily:"'Press Start 2P', cursive",
                    webkitTextShadow: '2px 3px 11px -1px rgba(0,0,0,0.75)',
                    mozTextShadow: '2px 3px 11px -1px rgba(0,0,0,0.75)',
                    textShadow: '2px 3px 11px -1px rgba(0,0,0,0.75)'
                  }}>Welcome</h3>
                </Col>
                <Col
                  fluid="true"
                  sm={6}
                  m={4}><p>Calling all musicians, photographers, promoters, and supports of the scene! DIY Connect is a safe place to look for tour resources or offer assistance anyway that you can.</p>

              <p>Need a shower in Worchester? We've got you covered.</p>

              <p>Can you offer a free vegetarian meal in Albuquerque? We'll find mouths for you to feed.</p>

              <p>Ready to join? <a href="#">Sign Up Now</a></p>
              </Col>
            </Row>
            <hr/>
            <Row className="show-grid"
              style={{
                marginTop:'2vh'
              }}>
              <Col
                fluid="true"
                sm={6}
                m={4}>
                <h3 style={{
                    backgroundColor: 'rgb(204,249,249)',
                    padding:5,
                    fontFamily:"'Press Start 2P', cursive"
                  }}>About</h3>
              </Col>
              <Col
                fluid="true"
                sm={6}
                m={4}>
                <p>DIY Connect is a not for profit project with the goal of making it easier for DIY bands to tour and DIY scenes to help out whomever they can. All postings are made by individuals or services dedicated to the wellbeing of their local music scene and the musicians who make it great.</p>

              <p>DIY-C is LGBTQ+, women, and minority friendly and will not tolerate using the platform for harassment of any kind.</p>

              <p>Please view our <a href="#"><span>Terms and Conditions</span></a> for more information.</p>
              </Col>
            </Row>
            <hr/>
            <Row className="show-grid"
              style={{
                marginTop:'2vh'
              }}>
              <Col
                fluid="true"
                sm={6}
                m={4}>
                <h3 style={{
                    backgroundColor: 'rgb(204,206,249)',
                    padding:5,
                    fontFamily:"'Press Start 2P', cursive"
                  }}>Help Out</h3>
                </Col>
                <Col
                  fluid="true"
                  sm={6}
                  m={4}><p>DIY Connect is maintained by one web mistress. If you are interested in helping with promoting or website/database management, specifically those with experience in React and POSTGres. Please email letmehelp@diyconnect.com with your resume and contact information.</p>

              <p>Interested in the history and future of DIY Connect? Check out our <a href="#">Story</a> page to read more about the project.</p>
              </Col>
            </Row>
          </Grid>
          <Search/>
          <SignUp/>
        </div>
      </div>
    )
  }
}
