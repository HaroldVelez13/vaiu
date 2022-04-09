import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClickHandler = e => {
        e.preventDefault();
        Meteor.loginWithPassword(username, password);
    };
    return (
        <Form>
            <FormGroup>
                <Label for="vaiuUserName">User Name</Label>
                <Input onChange={(e) => setUsername(e.target.value)}
                    name="username" id="vaiuUserName" placeholder="user vaiu" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)}
                    type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
            <div className='text-center'>
                <Button onClick={onClickHandler} color="warning" size="lg" block>Login</Button>

            </div>
        </Form>
    )
}

export default Login;