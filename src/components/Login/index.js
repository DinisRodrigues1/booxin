import React, { Component, Fragment } from 'react'
import {Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from './authActions'

class Login extends Component {
    state = {
        email: '',
        password: ''
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
    render(){
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
                </Form>    
                </div>
                <p><a href="">Esqueci a minha Password</a></p>
                <hr className="my-2" />
                <p>Ainda não tem conta?</p>
                <p className="lead">
                <Link to="/register"><Button color="secondary">Registe-se</Button></Link>
                </p>
                </Jumbotron></Col>
    
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left mb-5">Login através do:</h1>
                <p>
                    <Button className="mb-4" color="primary btn-md btn-block">Facebook</Button>
                </p>
                <p>
                    <Button className="mb-4" color="info btn-md btn-block">Twitter</Button>
                </p>
                <p>
                    <Button color="danger btn-md btn-block">G-mail</Button>
                </p>
                </Jumbotron></Col>
                </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(Login)