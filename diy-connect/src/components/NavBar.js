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
          <Navbar.Brand>
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

        <Navbar.Collapse>
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
            <NavItem eventKey={4} href="#">
              Log In
            </NavItem>

            <NavItem eventKey={5} href="#">
              Log Out
            </NavItem>

            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" style={{borderRadius:0}}/>
              </FormGroup>
              <Button type="submit" style={{borderRadius:0}}>Submit</Button>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
</Navbar>

    )
  }
}
