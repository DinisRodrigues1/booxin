import React, { Component, Fragment } from 'react'
import './Results.scss'
import SearchProvider, { Consumer } from '../../searchContext'

class Results extends Component {
    render(){
        return(
            <SearchProvider>
                <Consumer>
                {value => 
                    <Fragment>
                        <h1>Results:</h1>
                        <h1>
                            {value}
                        </h1>
                    </Fragment>
                }
                </Consumer>
            </SearchProvider>
        )
    }
}

export default Results