import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Form, FormGroup, Label, Button } from 'reactstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const authSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required().min(8),
}).required();

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(authSchema)
    });
    const onSubmit = (auth) => {
        const { username, password } = auth
        Meteor.loginWithPassword(username, password);
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup>
                <Label for="vaiuUserName">Username</Label>
                <input  {...register("username")} className="form-control"
                    name="username" id="vaiuUserName" placeholder="user vaiu" />
                <small className='text-danger'>{errors?.username ? "Enter the username" : null}</small>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <input  {...register("password")} className="form-control"
                    type="password" name="password" id="examplePassword" placeholder="password" />
                <small className='text-danger'>{errors?.password ? "Enter the password, minimum 8 characters" : null}</small>
            </FormGroup>
            <div className='text-center'>
                <Button type='submit' color="warning" size="lg" block>Login</Button>
            </div>
        </Form>
    )
}

export default Login;