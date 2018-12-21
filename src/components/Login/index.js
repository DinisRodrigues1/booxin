import React, { Component, Fragment } from 'react'
import {Jumbotron, Button, Container, Row, Col} from 'reactstrap'
import Navbar from '../Navbar'
import Footer from '../Footer'

class Login extends Component {
   

    render(){
        return(
            <div className="App">
            <Navbar />
            <Fragment >
                <Container>
                <Row>
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left">Login:</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
                </Jumbotron></Col>
    
                <Col xs="6"><Jumbotron className="container my-5">
                <h1 className="text-left">Login:</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
                </Jumbotron></Col>
                </Row>
                </Container>
            </Fragment>
            <Footer />
            </div>
        )

    }
}

export default Login