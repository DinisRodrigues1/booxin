import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav, NavItem } from 'reactstrap'


const SignedOutLinks = () => {
    return (
        <React.Fragment>
    
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline color="primary">
                <Link to="/sobre">Sobre</Link>
              </Button>
            </NavItem>
  
            <NavItem>
              <Button outline color="primary">
                <Link to="/login">Login</Link>
              </Button>
            </NavItem>              
          </Nav>
    
        </React.Fragment>
    )
}

export default SignedOutLinks