import React, { Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    } from 'reactstrap'
import { Link } from 'react-router-dom'
import brand from '../../../assets/logo/logo.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
    

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
          const { auth, profile } = this.props
          // console.log(auth)
          const links = auth.uid ? <SignedInLinks profile={profile} auth={auth} /> : <SignedOutLinks />
          return (
            <Fragment>
              <Navbar color="light" dark expand="md">
                <NavbarBrand>
                  <Link to="/">
                    <img src={brand} alt="boox brand logo"/>
                  </Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                { links }
                </Collapse>
              </Navbar>
            </Fragment>
          );
        }
      }

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navigation)