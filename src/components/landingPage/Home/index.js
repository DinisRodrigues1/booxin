import React, { Component, Fragment } from 'react'
import './Home.scss'
import { Container, Row, Col } from 'reactstrap'
import Search from '../../search/Search'


class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="background">
                    <Search className="search" history={this.props.history}/>
                </div>
                {/* <img 
                    src={books} 
                    className="imgStyle"
                    alt="A pile of books" /> */}
                <Container className="marginTB">
                <Row>
                    <Col xs="6" className="justified">
                    A forma correta para utilizar esta ferramenta implica registar-se primeiro e depois utilizar a função de pesquisa, mas, como sabemos que as pessoas gostam de experimentar os produtos antes de se comprometerem, sinta-se à vontade para pesquisar um livro.
                    Depois de adicionar um livro à sua biblioteca, este será apresentado no nosso acervo e qualquer utilizador poderá ter acesso ao seu contacto (email) de forma a combinarem a troca de livros.
                    </Col>
                    <Col xs="6" className="justified">
                    Esta aplicação foi desenvolvida no contexto da disciplina de Laboratório Multimédia 5 como avaliação final.
                    Fica o nosso agradecimento ao professor Carlos, ao professor Telmo, ao Sidónio, ao Cristovão, à Leonor e à Inês.<br/>
                    Deu-nos muito gozo fazer este projeto.
                    </Col>
                </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Home