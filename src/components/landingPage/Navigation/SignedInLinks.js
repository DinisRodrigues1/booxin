import React from 'react'
import { NavLink as NLink } from 'react-router-dom'
import { NavLink, Nav, NavItem } from 'reactstrap'
import { connect } from 'react-redux'
import { signOut } from '../../auth/Login/authActions'

const SignedInLinks = (props) => {
  console.log(props)
    return (
        <React.Fragment>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><NLink to="/sobre">Sobre</NLink></NavLink>
            </NavItem> 
            <NavItem>
    <NavLink>{props.profile.userName ?<NLink to="/userpage">{props.profile.userName}</NLink>:<NLink to="/userpage">{props.auth.displayName}</NLink>}</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink><NLink to="/" onClick={props.signOut}>Logout</NLink></NavLink>
            </NavItem>              
          </Nav>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)