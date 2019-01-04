import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class UserPage extends Component {

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