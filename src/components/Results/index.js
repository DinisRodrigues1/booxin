import React, { Component, Fragment } from 'react'
import './Results.scss'
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import { Pagination as Page } from "reactstrap"
import { Media } from 'reactstrap';


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
        


        return(
            <Fragment>
                <h1>Results:</h1>
                    {this.props.search ? 
                        itemsShown.map((title) => (
                        <div className="wrapper">
                            <Media className="mt-1">
                                <Media left middle href="" className="cover">
                                {title.isbn[0] ? 
                                    <Media object src={`http://covers.openlibrary.org/b/isbn/${title.isbn[0]}-M.jpg`} alt="Generic placeholder image" />
                                    : title.isbn[1]}
                                </Media>
                                
                                <Media body className="info">
                                    <Media heading>
                                        Autor: {title.author_name}
                                    </Media>
                                        <p>Título: {title.title}</p>
                                        {title.publisher[1] ? <p>Editora: {title.publisher[0] +", " + title.publisher[1]}</p> : <p>Editora: {title.publisher[0]}</p>}
                                </Media> 
                            </Media>
                        </div>     
                         )) : `vazio`}
                        <Page>
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={arr[0].length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                                />
                        </Page>
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