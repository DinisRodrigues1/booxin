import React, { Component, Fragment } from 'react'
import './Results.scss'
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";

const itemsPerPage = 5;

class Results extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activePage: 1
        };

             
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber
        });
    }

    render(){
        var arr = Object.values(this.props.search)
        console.log(arr)
        const indexOfLastThing = this.state.activePage * itemsPerPage;
        const indexOfFirstThing = indexOfLastThing - itemsPerPage;
        // For page 1, you will get things.slice(0, 5).
        // For page 2, you will get things.slice(5, 10).
        const itemsShown = arr.slice(
          indexOfFirstThing,
          indexOfLastThing
        );

        return(
            <Fragment>
                <h1>Results:</h1>
                    {this.props.search ? 
                         itemsShown.map((title) => (
                         <div>
                             <br/>
                         <li key={title.author_name}>
                         {"Nome do Autor: "+ title.author_name}
                         </li>
                         <li key={title.title}>
                         {"Titulo do livro: " +title.title}
                         </li>
                         <li key={title.publisher}>
                         {"Editora: " +title.publisher}
                         </li>
                         <br/>
                         <hr/>
                         
                         </div>
                         
                         )) : `vazio`}
                       <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={this.props.search.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange.bind(this)}
                        />
              </Fragment>
        )}
}

//this.props.search.value.data
const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps)(Results)