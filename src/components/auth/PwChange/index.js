import React, { Fragment, Component } from 'react'
import {Jumbotron, Button, Col, Form, FormGroup, Label, Input, Alert} from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../Login/authActions'

class PwChange extends Component {
    state = {
        email: ''
    }
    
    render() {
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return(
            <Fragment>
                <Col sm="12" md={{ size: 6, offset: 3 }}><Jumbotron className="container my-5">
                <h2 className="text-left">Insira o seu E-mail:</h2>
                <hr className="my-2" />
                <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="text-left" for="exampleEmail">E-mail:</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email" />
                    </FormGroup>
                <FormGroup>
                <Button className="mt-3" type="submit" color="primary">Redefinir Password</Button>
                <div>{ authError ? <Alert color="danger">{authError}</Alert>: null}</div>
                </FormGroup>
                </Form>   
                </div> 
                </Jumbotron></Col>   
            </Fragment>
        )
}


 
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}
    
const mapDispatchToProps = (dispatch) => {
    return {
       signUp: (creds) => dispatch(signUp(creds)),
       // signUpFacebook: (creds) => dispatch(signUpFacebook(creds)),
       // signUpGoogle: (creds) => dispatch(signUpGoogle(creds)),
       // signUpTwitter: (creds) => dispatch(signUpTwitter(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PwChange)