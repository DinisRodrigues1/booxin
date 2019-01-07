import React, { Component, Fragment } from 'react'
import './Results.scss'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"
import { Pagination as Page } from "reactstrap"
import { Redirect } from 'react-router-dom'
import { Media, Button } from 'reactstrap'


const itemsPerPage = 5


class Results extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activePage: 1,
            author_name: ''
        };

             
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`)
        this.setState({
            activePage: pageNumber
        });
    }

    handleAdd = (e) => {
        const { auth } = this.props
        console.log('data added')
        if (!auth.uid) return <Redirect to='/login' />
        /* this.setState({
            author_name: mapdata.title.author_name
            
        }) 
        console.log(this.state.author_name)*/
    }

    render(){
        
        var arr = Object.values(this.props.search)
        window.localStorage.setItem('show', JSON.stringify(arr))
        let storage = window.localStorage.getItem('show')
        let usage = JSON.parse(storage)
        console.log(storage)
        const indexOfLastThing = this.state.activePage * itemsPerPage;
        const indexOfFirstThing = indexOfLastThing - itemsPerPage;
        // For page 1, you will get things.slice(0, 5).
        // For page 2, you will get things.slice(5, 10).
        const itemsShown = usage[0].slice(
          indexOfFirstThing,
          indexOfLastThing
        );

        return(
            <Fragment> 
                <h1>Results:</h1>
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
                                    <Button color="primary" onClick={this.handleAdd} className="button">
                                        + info
                                    </Button><br/>
                                    <Button color="primary" onClick={this.handleAdd} className="button">
                                        Adicionar
                                    </Button>
                            </div>
                        </Media>
                         )) : `Erro de pesquisa`}
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

//this.props.search.value.data
const mapStateToProps = (state) => {
    return {
        search: state.search,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Results)