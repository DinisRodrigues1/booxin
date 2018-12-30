import React, { Component, Fragment } from 'react'
import {Form, FormGroup, Button, Input} from 'reactstrap'
import { Link } from 'react-router-dom'
import './Search.scss'
import { connect } from 'react-redux'

const axios = require('axios')

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: null,
            searchResult: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            searchValue: event.target.value
        })
    }

    handleClick = () => {
        async function getBooks() {
            try {
              const response = await axios.get('http://openlibrary.org/search.json?q='+this.state.searchValue)
              
            } catch (error) {
              console.error(error)
            }
        }
        getBooks()
        this.props.onSearch(this.state.searchResult)
    }

    render() {
        return (
            <Fragment>
                <Form inline className="justify-content-center margin">
                    <FormGroup>
                        <Input 
                            type="text"
                            placeholder="Escolha um livro"
                            bsSize="lg"
                            onChange={(e)=>this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Link to='/results'>
                            <Button 
                            className="margin-left"
                            onClick={()=>this.handleClick()} color="link">🔎</Button>
                        </Link>
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }
}

//para ler state global
const mapStateToProps = (state) => {
    return {
        search: state.searchResult
    }
}

//para escrever no reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (e) => dispatch({type: 'SEARCH', search: e})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)