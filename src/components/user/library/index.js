import React, { Component, Fragment } from 'react'
import './library.scss'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"
import { Pagination as Page } from "reactstrap"
import { Link, Redirect } from 'react-router-dom'
import { Media, Button } from 'reactstrap'
import { getUserBooks } from './libraryActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import _ from 'lodash'

const axios = require('axios')

const itemsPerPage = 5


class Library extends Component {
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

    render(){
        
        const { auth } = this.props;
        const { books } = this.state;
        console.log(books)
        if (!auth.uid) return <Redirect to="/" />
        
        return(
               <Fragment> 
               <h3>Livros do:</h3>
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
                                <Button 
                                    color="danger" 
                                    id={book.isbn}
                                    onClick={this.deleteBook} 
                                    className="button">
                                        Apagar
                                </Button><br/>
                            </div>
                        </Media>
                        )) : `Erro de pesquisa`}
                            <Pagination
                               activePage={this.state.activePage}
                               itemsCountPerPage={10}
                               totalItemsCount={books.length}
                               pageRangeDisplayed={5}
                               onChange={this.handlePageChange.bind(this)}
                               onClick={() => {window.scrollTop()}}
                               className="pagination"/>
             </Fragment>
        )}
                     

        componentDidMount() {
            this.props.getUserBooks();
        }
    
        componentDidUpdate(prevProps){
            if(prevProps.books !== this.props.books){
                console.log("BOOKS",  this.props.books);

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
                    isbn: response.data['ISBN:'+info].details.isbn_10
                }

                books.push(book);

                const { auth } = this.props
                const profile = this.props.profile
                let nameOf = ''
                let inform = ''
                /*let arr = this.props.books
                
               const filter = arr && arr.filter((book) =>{
                    if (auth.displayName != null) {
                        nameOf = auth.displayName
                        return book.displayName == nameOf
                    }
                    else {
                        nameOf = profile.userName
                        return book.user == nameOf
            
                    }
                    
                
                })*/
                const indexOfLastThing = this.state.activePage * itemsPerPage;
                const indexOfFirstThing = indexOfLastThing - itemsPerPage;
                // For page 1, you will get things.slice(0, 5).
                // For page 2, you will get things.slice(5, 10).

               
                /*const query = filter && filter.map((isbn) => {
                    return isbn.book_isbn
                })*/



                this.setState({books:books});
            }).catch((err) =>{
                  console.log(err)
            }).then(()=>{
                console.log('here')
            })
        }
    
        
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        books: state.firestore.ordered.books,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserBooks: () => dispatch(getUserBooks())
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), 
firestoreConnect([
    { collection: 'users',
      collection: 'books' }
]))(Library)