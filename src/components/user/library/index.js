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
        const { auth, books } = this.props
        console.log(this.props.books)
        if (!auth.uid) return <Redirect to="/" />
        var arr = this.props.books
        const indexOfLastThing = this.state.activePage * itemsPerPage;
        const indexOfFirstThing = indexOfLastThing - itemsPerPage;
        // For page 1, you will get things.slice(0, 5).
        // For page 2, you will get things.slice(5, 10).


        return(
            <Fragment> 
                      {arr && arr.map((title) => (
                        <Fragment>
                        <div>{title.id}</div>
                        <div>{title.book_isbn}</div>
                        <div>{title.displayName}</div>
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
        books: state.firestore.ordered.books
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