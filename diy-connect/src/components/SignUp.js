import React, { Component } from 'react';
import { Modal, Popover, Tooltip, Button, OverlayTrigger, } from 'react-bootstrap';

export default class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontFamily:"'Press Start 2P', cursive"
              }}
              >Create New Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Basic Information</h4>
            <p>First Name</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
