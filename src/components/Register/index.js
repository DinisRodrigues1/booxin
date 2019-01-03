import React, { Component, Fragment } from 'react'
import {Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'

class Register extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <Fragment>
               
                <Col sm="12" md={{ size: 6, offset: 3 }}><Jumbotron className="container my-5">
                <h1 className="text-left">Registo:</h1>
                <hr className="my-2" />
                <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="text-left" for="exampleEmail">Email:</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-left" for="exampleUser">Username:</Label>
                        <Input type="text" name="username" id="username" onChange={this.handleChange} placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-left" for="examplePassword">Password:</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Password" />
                    </FormGroup>
                <FormGroup>
                <Button className="mt-3" type="submit" color="primary">Registar</Button>
                </FormGroup>
                </Form>   
                </div> 
                </Jumbotron></Col>

                
            </Fragment>
        )
    }
}

export default Register