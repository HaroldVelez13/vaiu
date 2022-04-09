import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const UserInit = {
    username: "",
    email: "",
    phone: "",

}

const Register = () => {
    const [user, setUser] = useState(UserInit);

    const onChangeHandler = (field, value) => {
        const newUser = user
        newUser[field] = value;
        setUser(newUser)
    }
    const onClickHandler = () => {
        console.log(user)
        Meteor.call('users.register', user);
    }
    return (
        <Form>
            <FormGroup>
                <Label for="vaiuUsername">User Name</Label>
                <Input onChange={(e) => onChangeHandler("username", e.target.value)}
                    type="text" name="username" id="vaiuUsername" placeholder="user vaiu" />
            </FormGroup>
            <FormGroup>
                <Label for="vaiuEmail">Email</Label>
                <Input onChange={(e) => onChangeHandler("email", e.target.value)}
                    type="email" name="email" id="vaiuEmail" placeholder="email@vaiu.com" />
            </FormGroup>
            <FormGroup>
                <Label for="vaiuPhone">Phone</Label>
                <Input onChange={(e) => onChangeHandler("phone", e.target.value)}
                    type="text" name="phone" id="vaiuPhone" placeholder="3159872356" />
            </FormGroup>
            <div className='text-center'>
                <Button onClick={onClickHandler}
                    color="warning" size="lg" block >Register</Button>
            </div>
        </Form>
    )
}

export default Register;