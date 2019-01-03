import React, { Component, Fragment } from 'react'
import {Jumbotron, Button, Container, Row, Col} from 'reactstrap'

class Login extends Component {
    render(){
        return(
            <Fragment >
                <Container>
                <Row>
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left">Login:</h1>
                <hr className="my-2" />
                <div>
                    <input placeholder="Utilizador"/>
                    <input placeholder="Password"/>
                </div>
                <Button color="primary">Entrar</Button>
                <p><a href="">Esqueci a minha Password</a></p>
                <hr className="my-2" />
                <p>Ainda não tem conta?</p>
                <p className="lead">
                <Button color="secondary">Registe-se</Button>
                </p>
                </Jumbotron></Col>
    
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left">Login através do:</h1>
                <p>
                    <Button color="primary">Facebook</Button>
                </p>
                <p>
                    <Button color="info">Twitter</Button>
                </p>
                <p>
                    <Button color="danger">Gmail</Button>
                </p>
                </Jumbotron></Col>
                </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Login