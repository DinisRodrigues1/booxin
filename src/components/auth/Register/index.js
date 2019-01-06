import React, { Component, Fragment } from 'react'
import {Jumbotron, Button, Col, Form, FormGroup, Label, Input, Alert} from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../Login/authActions'


class Register extends Component {
    state = {
        email: '',
        userName: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }
    
    render(){
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return(
            <Fragment>
               
                <Col sm="12" md={{ size: 6, offset: 3 }}><Jumbotron className="container my-5">
                <h1 className="text-left">Registo:</h1>
                <hr className="my-2" />
                <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="text-left" for="exampleEmail">Email:</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-left" for="exampleUser">Username:</Label>
                        <Input type="text" name="userName" id="userName" onChange={this.handleChange} placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-left" for="examplePassword">Password:</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Password" />
                    </FormGroup>
                <FormGroup>
                <Button className="mt-3" type="submit" color="primary">Registar</Button>
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
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Register)