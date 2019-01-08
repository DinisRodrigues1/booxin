import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Trade extends Component {
    constructor(props){
        super(props)

        this.state = {
            books:[]
        }
    }

    render(){
        const { books } = this.state;
        return(
            <Fragment>
                <h1>Troca</h1>
                <p>O email da pessoa que possui o livro BOOK</p>
                <p>EMAIL</p>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        books: state.firestore.ordered.books,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Trade)