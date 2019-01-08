import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, col } from 'reactstrap'
import './UserPage.scss'


class UserPage extends Component {
    
        /* THESE ARE METHODS TO CHANGE THE USER PASSWORD TO BE IMPLEMENTED LATER */
    /*
      var user = firebase.auth().currentUser;
      var newPassword = getASecureRandomPassword();

      user.updatePassword(newPassword).then(function() {
      // Update successful.
      }).catch(function(error) {
      // An error happened.
      });
    */

    render(){
        const { auth } = this.props
        if (!auth.uid) return <Redirect to="/login" />
        return(
            <Fragment>
                    <h1 className="margin">Painel de controlo</h1>
                    <div className="margin">
                        Alterar o email<br/>
                        <Button>Alterar</Button>
                    </div>
                    <div className="margin">
                        Alterar a password<br/>
                    <Button>Alterar</Button>
                    </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps)(UserPage)