import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
        <Container>
            <Row>
                <Col className="col">There's some info in here</Col>
            </Row>
            <Row>
                <Col>Projeto realizado no âmbito da UC Laboratório Multimédia 5</Col>    
            </Row>
            <Row><Col>Universidade de Aveiro - 2018</Col></Row>

        </Container>
        </div>




    )
}

export default Footer