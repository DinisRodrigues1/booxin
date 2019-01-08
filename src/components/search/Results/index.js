import React, { Component, Fragment } from 'react'
import './Results.scss'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"
import { Pagination as Page } from "reactstrap"
import { Link } from 'react-router-dom'
import { Media, Button } from 'reactstrap'
import { addToLibrary } from '../../user/library/libraryActions'


const itemsPerPage = 5


class Results extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activePage: 1,
        };

             
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`)
        this.setState({
            activePage: pageNumber
        });
    }

    handleAdd = (e) => {
        this.props.addToLibrary(e.target.id)
        console.log(this.state)
        console.log('data added')
    }

    render(){
        const { auth } = this.props
        var arr = Object.values(this.props.search)
        const indexOfLastThing = this.state.activePage * itemsPerPage;
        const indexOfFirstThing = indexOfLastThing - itemsPerPage;
        // For page 1, you will get things.slice(0, 5).
        // For page 2, you will get things.slice(5, 10).
        const itemsShown = arr[0].slice(
          indexOfFirstThing,
          indexOfLastThing
        );

        return(
            <Fragment> 
                <h3 className="align-left">Resultados:</h3><hr/>
                    {this.props.search ? 
                      itemsShown.map((title) => (
                          
                        <Media className="d-flex p-2 mt-1 flex-row flex-wrap justify-content-around align-items-center">
                            <div className="flex-column flex-grow-1">
                                <Media left middle href="" className="cover">
                                {title.isbn[0] ? 
                                    <Media object src={`http://covers.openlibrary.org/b/isbn/${title.isbn[0]}-M.jpg`} alt={title.title} className="size"/>
                                    : title.isbn[1]}
                                </Media>
                            </div>
                          
                            <div className="flex-column flex-grow-2">
                                <Media body className="info text-center">
                                    <Media heading>
                                        Autor: {title.author_name}
                                    </Media>
                                        <p>Título: {title.title}</p>
                                        {title.publisher[1] ? <p>Editora: {title.publisher[0] +", " + title.publisher[1] + ", entre outras."}</p> : <p>Editora: {title.publisher[0]}</p>}
                                </Media> 
                            </div>
                            <div className="flex-column flex-grow-1">
                                <Button 
                                    color="primary" 
                                    onClick={this.handleAdd} 
                                    className="button">
                                        + info
                                </Button><br/>
                                {auth.isEmpty ? 
                                    <Link to='/login'>
                                        <Button 
                                            color="primary" 
                                            id={title.isbn[1]}  
                                            className="">
                                            Adicionar
                                        </Button>
                                    </Link> 
                                    : 
                                    <Button 
                                        color="primary" 
                                        id={title.isbn[0]}
                                        onClick={this.handleAdd} 
                                        className="">
                                            Adicionar
                                    </Button>}
                            </div>
                        </Media>
                         )) : <h1>`Erro de pesquisa`</h1>}
                        <Page>
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={arr[0].length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                                />
                        </Page>
              </Fragment>
        )}
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToLibrary: (book) => dispatch(addToLibrary(book))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Results)