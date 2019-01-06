import React, { Component, Fragment } from 'react'
import {Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input, Alert} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn, signUpFacebook, signUpGoogle, signUpTwitter } from './authActions'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: '',
        token: '',
        user: '',
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }
    facebookLogin = (e) => {
        e.preventDefault()
        this.props.signUpFacebook(this.state)
        console.log('state is' + this.state)
    }
    googleLogin = (e) => {
        e.preventDefault()
        this.props.signUpGoogle(this.state)
    }
    twitterLogin = (e) => {
        e.preventDefault()
        this.props.signUpTwitter(this.state)
    }
    render(){
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to="/" /> // IMPLEMENT CHANGE PASSWORD AND FORGOT PASSWORD
        return(
            <Fragment>
                <Container>
                <Row>
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left">Login:</h1>
                <hr className="my-2" />
                <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="text-left" for="exampleEmail">Email:</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-left" for="examplePassword">Password:</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Password" />
                    </FormGroup>
                <FormGroup>
                <Button type="submit" className="mb-3" color="primary">Entrar</Button>
                </FormGroup>
                <div>{ authError ? <Alert color="danger">{authError}</Alert>: null}</div>
                </Form>
                   
                </div>
                <p><Link to="/passwordreset">Esqueci a minha Password</Link></p> 
                <hr className="my-2" />
                <p>Ainda não tem conta?</p>
                <p className="lead">
                <Link to="/register"><Button color="secondary">Registe-se</Button></Link>
                </p>
                </Jumbotron></Col>
    
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left mb-5">Login através do:</h1>
                <p>
                    <Button className="mb-4" color="primary btn-md btn-block" onClick={this.facebookLogin}>Facebook</Button>
                </p>
                <p>
                    <Button className="mb-4" color="info btn-md btn-block" onClick={this.twitterLogin}>Twitter</Button>
                </p>
                <p>
                    <Button color="danger btn-md btn-block" onClick={this.googleLogin}>Google</Button>
                </p>
                </Jumbotron></Col>
                </Row>
                </Container>
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
        signIn: (creds) => dispatch(signIn(creds)),
        signUpFacebook: (creds) => dispatch(signUpFacebook(creds)),
        signUpGoogle: (creds) => dispatch(signUpGoogle(creds)),
        signUpTwitter: (creds) => dispatch(signUpTwitter(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)