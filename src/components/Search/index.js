import React from 'react'
import {Form, FormGroup, Button, Input} from 'reactstrap'

import './Search.css'

const Search = () => {
    return (
        <React.Fragment>
            <Form inline>
                <FormGroup>
                    <Input 
                        type="text"
                        placeholder="Escolha um livro"
                        bsSize="lg" />
                </FormGroup>
                <FormGroup>
                    <Button>Search</Button>
                </FormGroup>
            </Form>
            
        </React.Fragment>
    )
}

export default Search