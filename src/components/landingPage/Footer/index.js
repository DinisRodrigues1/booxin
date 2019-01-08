import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './Footer.scss'

const Footer = () => {
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        Projeto realizado no âmbito da UC Laboratório Multimédia 5<br/>
                        Universidade de Aveiro - 2018
                    </Col>    
                    <Col>
                        Trabalho realizado por:<br/>
                        <a href="https://github.com/DinisRodrigues1" style={{ textDecoration: 'none' }}>Dinis</a> Rodrigues<br/>
                        João <a href="http://pantaleao.solutions" style={{ textDecoration: 'none' }}>Pantaleão</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer