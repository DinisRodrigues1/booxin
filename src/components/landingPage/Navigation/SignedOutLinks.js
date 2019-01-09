import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLink, NavItem } from 'reactstrap'

const SignedOutLinks = () => {
    return (
        <Fragment>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/acervo" style={{ textDecoration: 'none' }}>
                  <NavLink>
                    Acervo
                  </NavLink>
                </Link>
            </NavItem>

            <NavItem>
                <Link to="/sobre" style={{ textDecoration: 'none' }}>
                  <NavLink>
                    Sobre
                  </NavLink>
                </Link>
            </NavItem>
  
            <NavItem>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <NavLink>
                    Login
                </NavLink>
              </Link>
            </NavItem>              
          </Nav>
        </Fragment>
    )
}

export default SignedOutLinks