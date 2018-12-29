import React, { Component, Fragment } from 'react'
import './Results.scss'
import { connect } from 'react-redux';

class Results extends Component {
    render(){
        return(
                <Fragment>
                    <h1>Results:</h1>
                    <h1>
                        {this.props.search}
                    </h1>
                </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.searchResult
    }
}

export default connect(mapStateToProps)(Results)