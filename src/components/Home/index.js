import React, { Component, Fragment } from 'react'
import './Home.scss'
import { Container, Row, Col } from 'reactstrap'
import Search from '../Search'
import books from '../../resources/pics/book-bindings-bookcase-books-694740.jpg'

class Home extends Component{
    render(){
        return(
            <Fragment>
                <img 
                    src={books} 
                    className="imgStyle"
                    alt="A pile of books" />
                <Container>
                <Row>
                    <Col xs="6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Col>
                    <Col xs="6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Col>
                </Row>
                </Container>
                <h1 className="hStyle">Experimente</h1>
                <Search />
            </Fragment>
        )
    }
}

export default Home