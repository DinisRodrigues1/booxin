import React, { Component, Fragment } from 'react'
import './Results.scss'
import { Consumer } from '../../searchContext'

class Results extends Component {
    render(){
        return(
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
        )
    }
}

export default Results