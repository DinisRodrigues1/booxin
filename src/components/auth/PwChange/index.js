import React, { Fragment, Component } from 'react'
import {Jumbotron, Button, Col, Form, FormGroup, Label, Input, Alert} from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { changePw } from '../Login/authActions'

class PwChange extends Component {
    state = {
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.changePw(this.state)
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
                <Button className="mt-3" type="submit" color="danger">Redefinir Password</Button>
                <div>{ authError ? <Alert color="danger" className="mt-4">{authError}</Alert>: null}</div>
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
       changePw: (creds) => dispatch(changePw(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PwChange)