import React from 'react'
import { NavLink as NLink } from 'react-router-dom'
import { NavLink, Nav, NavItem } from 'reactstrap'


const SignedOutLinks = () => {
    return (
        <React.Fragment>
    
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><NLink to="/sobre">Sobre </NLink></NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink><NLink to="/login"> Login</NLink></NavLink>
            </NavItem>              
          </Nav>
    
        </React.Fragment>
    )
}

export default SignedOutLinks