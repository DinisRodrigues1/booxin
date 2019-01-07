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
        const { auth } = this.props
        if (!auth.uid) return <Redirect to="/" />
     /*   var arr = Object.values(this.props.search)
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
*/
        return(
            <Fragment> 
            
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
        search: state.search,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserBooks: () => dispatch(getUserBooks())
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), 
firestoreConnect([
    { collection: 'users' }
]))(Library)