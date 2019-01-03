import React, { Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'
import { Link, NavLink as NLink } from 'react-router-dom'
import brand from '../../assets/logo/brand.png'
    

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
                  <Nav className="ml-auto" navbar>
                 
                    <NavItem>
                      <NavLink><NLink to="/sobre">Sobre </NLink></NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavLink><NLink to="/login"> Login</NLink></NavLink>
                    </NavItem>
                    
                  </Nav>
                </Collapse>
              </Navbar>
            </Fragment>
          );
        }
      }

export default Navigation