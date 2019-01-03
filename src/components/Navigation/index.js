import React, { Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    } from 'reactstrap'
import { Link } from 'react-router-dom'
import brand from '../../assets/logo/brand.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
    

class Navigation extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <Fragment>
              <Navbar color="dark" dark expand="md">
                <NavbarBrand>
                  <Link to="/">
                    <img src={brand} />
                  </Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <SignedInLinks/>
                <SignedOutLinks/>
                </Collapse>
              </Navbar>
            </Fragment>
          );
        }
      }

export default Navigation