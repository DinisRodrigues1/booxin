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
import axios from 'axios';


const itemsPerPage = 5


class Library extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activePage: 1,
        };

             
    }
    componentDidMount() {
        this.props.getUserBooks()

    }

    render(){
        const { auth } = this.props
        const profile = this.props.profile
        console.log(this.props.profile)
        console.log()
        console.log(this.props.books)
        let nameOf = ''
        if (!auth.uid) return <Redirect to="/" />
        var arr = this.props.books
        const indexOfLastThing = this.state.activePage * itemsPerPage;
        const indexOfFirstThing = indexOfLastThing - itemsPerPage;
        // For page 1, you will get things.slice(0, 5).
        // For page 2, you will get things.slice(5, 10).
        const filter = arr && arr.filter((book) =>{
            if (auth.displayName != null) {
                nameOf = auth.displayName
                return book.displayName == nameOf
            }
            else {
                console.log("this is user" + book.user)
                nameOf = profile.userName
                return book.user == nameOf
    
            }
            
        
        })
        const query = filter && filter.map((isbn) => {
            console.log(isbn.book_isbn)
        }).then(axios)
        

        return(
            <Fragment> 
                      {filter && filter.map((title) => (
                        <Fragment>
                            {title.displayName ? 
                        <h2>{`Livros do ${title.displayName}`}</h2> :
                        <h2>{`Livros do ${title.user}`}</h2> }
                        <div>{title.id}</div>
                        <div>{title.book_isbn}</div>
                        
                        </Fragment>
                    ))}
              
                        <Page>
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                //totalItemsCount={arr[0].length}
                                pageRangeDisplayed={5}
                               // onChange={this.handlePageChange.bind(this)}
                                />
                        </Page>
              </Fragment>
        )}
        
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