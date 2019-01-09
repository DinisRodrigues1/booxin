import React, { Component, Fragment } from 'react'
import './acervo.scss'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"
import { Media, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import { getAllUserBooks, getUserInfo } from '../library/libraryActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import _ from 'lodash'

const axios = require('axios')


class Acervo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activePage: 1,
            books:[]
        }

    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`)
        this.setState({
            activePage: pageNumber
        });
    }

    handleTrade =(e) =>{
        console.log('trade')
        this.props.getUserInfo(e.target.id);
    }

    render(){
        const { books } = this.state
        return(
               <Fragment> 
                <h3 className="align-left">Livros dos utilizadores: <hr/></h3>
                   {books ? 
                     books.map((book) => (
                       <Media className="d-flex p-2 mt-1 flex-row flex-wrap justify-content-around align-items-center">
                           <div className="flex-column box ">
                                   <Media object src={`http://covers.openlibrary.org/b/id/${book.cover}-M.jpg`} alt={book.name} className="cover align-self-center" onLoad={this.onImgLoad}/>
                           </div>
                           <div className="flex-column">
                               <Media body className="info text-center box-info">
                                   <Media heading>
                                       Autor: {book.author}
                                   </Media>
                                       <p>Título: {book.name}</p>
                                       {book.publishers[1] ? <p>Editora: {book.publishers[0] +", " + book.publishers[1] + ", entre outras."}</p> : <p>Editora: {book.publishers[0]}</p>}
                               </Media> 
                               </div>
                               <div className="flex-column flex-grow-1">
                               <Link to="/troca">
                                <Button 
                                    color="success" 
                                    id={book.isbn}
                                    onClick={this.handleTrade} 
                                    className="button">
                                        Trocar
                                </Button>
                                </Link><br/>
                            </div>
                        </Media>
                        )) : <div><p>Ainda não adicionaste nenhum livro à tua biblioteca.</p></div>}
                            <Pagination
                               activePage={this.state.activePage}
                               itemsCountPerPage={10}
                               totalItemsCount={books.length}
                               pageRangeDisplayed={5}
                               onChange={this.handlePageChange.bind(this)}
                               onClick={() => {window.scrollTop()}}
                               className="pagination"/>
             </Fragment>
        )
    }
                     

    componentDidMount() {
        this.props.getAllUserBooks();
    }

    componentDidUpdate(prevProps){
        if(prevProps.books !== this.props.books){
            this.props.books.forEach((book)=>{
                this.getInfo(book.book_isbn)
            });
        }
    }


        getInfo(info) {
            axios.get(`http://openlibrary.org/api/books?bibkeys=ISBN:${info}&jscmd=details&format=json`, {
    
            }).then((response) => {
                let books = _.cloneDeep(this.state.books);
                let book ={
                    author: response.data['ISBN:'+info].details.authors[0].name,
                    name: response.data['ISBN:'+info].details.title,
                    cover: response.data['ISBN:'+info].details.covers,
                    publishers: response.data['ISBN:'+info].details.publishers,
                    isbn: response.data['ISBN:'+info].details.isbn_10[0]
                }
                console.log(book.isbn, "here is book")
                books.push(book);
                this.setState({books:books});
            }).catch((err) =>{
                  console.log(err)
            }).then(()=>{
                console.log('here')
            })
        }
    
        
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        books: state.firestore.ordered.books,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUserBooks: () => dispatch(getAllUserBooks()),
        getUserInfo: () => dispatch(getUserInfo())
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), 
firestoreConnect([
    { collection: 'users',
      collection: 'books' }
]))(Acervo)