import React, { Component, Fragment } from 'react'
import './Results.scss'
import { connect } from 'react-redux';

class Results extends Component {
    render(){
        return(
            <Fragment>
                <h1>Results:</h1>
                <h1>
                    {this.props.search ? this.props.search : `vazio`}
                </h1>
            </Fragment>
        )
    }
}

//this.props.search.value.data
const mapStateToProps = (state) => {
    return {
        search: state.searchResult
    }
}

export default connect(mapStateToProps)(Results)