import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { 
  NavLink, 
  Nav, 
  NavItem, 
  UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import { connect } from 'react-redux'
import { signOut } from '../../auth/Login/authActions'

const SignedInLinks = (props) => {
  console.log(props)
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
                { props.profile.userName ? 
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {props.profile.userName}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link to="/biblioteca" style={{ textDecoration: 'none' }}>
                        <NavLink><DropdownItem>
                          Biblioteca
                        </DropdownItem></NavLink>
                      </Link>
                      <Link to="/painel" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                          Painel de controlo
                        </DropdownItem>
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  :
                  <NavLink>
                    {props.auth.displayName}
                  </NavLink>
                }
            </NavItem> 
            
            <NavItem>
              <Link to="/sobre" style={{ textDecoration: 'none' }}>
                <NavLink>
                  Sobre
                </NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <NavLink onClick={props.signOut}>
                  Logout
                </NavLink>
              </Link>
            </NavItem>              
          </Nav>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)