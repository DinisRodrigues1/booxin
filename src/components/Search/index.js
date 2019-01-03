import React, { Component, Fragment } from 'react'
import {Form, FormGroup, Input, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import './Search.scss'
import { connect } from 'react-redux'
import icon from '../../assets/logo/brand.png'


const axios = require('axios')

class Search extends Component {
    constructor(props){
        super(props)
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

    handleClick = (event) => {
        event.preventDefault();
        axios.get('http://openlibrary.org/search.json?q='+this.state.searchValue, {
            })
            .then((response) => {
                this.props.onSearch(response.data.docs);
                console.log(this.props.search[0].isbn[0])
            })
            .catch( (error) =>{
            console.log(error);
            }).then(()=>{
                this.props.history.push("/resultados");
            })
    }
        
    

    render() {
        return (
            <Fragment>
                <Form inline className="justify-content-center margin" onSubmit={this.handleClick} color="link">
                    <FormGroup>
                        <Input 
                            type="text"
                            placeholder="Escolha um livro"
                            bsSize="lg"
                            onChange={(e)=>this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">
                            <img src={icon} className="imgMargin"/>
                        </Button>
                    </FormGroup>
                </Form>
            </Fragment>
        )
    }
}

//para ler state global
const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

//para escrever no reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (e) => dispatch({type: 'SEARCH', payload: e})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)