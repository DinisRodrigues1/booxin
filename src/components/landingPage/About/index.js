import React, { Component, Fragment } from 'react'

class About extends Component {
    render(){
        return(
            <Fragment>
                <h1 className="margin">Trabalho realizado por:</h1>
                <div className="margin">
                    <a href="https://github.com/DinisRodrigues1" style={{ textDecoration: 'none' }}>Dinis</a> Rodrigues<br/>
                    João <a href="http://pantaleao.solutions" style={{ textDecoration: 'none' }}>Pantaleão</a>
                </div>
            </Fragment>
        )
    }
}

export default About