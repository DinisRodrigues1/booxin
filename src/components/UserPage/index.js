import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


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
            <div>
                <p>User info</p>
            </div>
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