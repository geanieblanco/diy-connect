import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        fixedTop= {true}
        style={{
          backgroundColor:"black",
          borderRadius:0
        }}>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <a href="#"
              id="navLogo"
              style={{
                color:"white",
                fontFamily:"'Press Start 2P', cursive",
                fontSize: 25
              }}>DIY Connect</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
          <Navbar.Collapse pullRight>
            <Nav>
              <NavItem eventKey={1} href="#">
                Account
              </NavItem>
              <NavItem eventKey={2} href="#">
                Map
              </NavItem>
              <NavItem eventKey={3} href="#">
                Story
              </NavItem>
            </Nav>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" style={{borderRadius:0}}/>
                </FormGroup>
                <Button type="submit" style={{borderRadius:0}}>Submit</Button>
              </Navbar.Form>
            <Nav pullLeft>
              <NavItem eventKey={1} href="#">
                Log In
              </NavItem>
              <NavItem eventKey={2} href="#">
                Log Out
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

    )
  }
}
