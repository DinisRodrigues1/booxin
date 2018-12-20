import React, { Component } from 'react'
import {Form, FormGroup, Button, Input} from 'reactstrap'
import { Link } from 'react-router-dom'

import './Search.scss'

const axios = require('axios')

class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchValue: null
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
        console.log(this.state.searchValue)
        axios.get('http://openlibrary.org/search.json?q='+this.state.searchValue)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    render() {
        return (
            <React.Fragment>
                <Form inline>
                    <FormGroup>
                        <Input 
                            type="text"
                            placeholder="Escolha um livro"
                            bsSize="lg"
                            onChange={(e)=>this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Link to='/results'>
                            <Button onClick={()=>this.handleClick()}>Search</Button>
                        </Link>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}

export default Search