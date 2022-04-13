import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react'
import { Form, FormGroup, Alert, Label, Button } from 'reactstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const userSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required().min(8),
}).required();

const Register = ({ onRegister }) => {
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const onDismiss = () => setVisible(false);

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema)
    });
    const onSubmit = (user) => {
        Meteor.call('users.register', user, (error) => {
            if (error) {
                setVisible(true);
                setErrorMessage(error?.reason);
            }
            else {
                setVisible(false);
                setErrorMessage('');
                onRegister(user.username)
                reset()
            }
        })
    };
    return (
        <>
            <Alert color="dark" isOpen={visible} toggle={onDismiss} className="text-center text-warning">
                {errorMessage}
            </Alert>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <input  {...register("username")} className="form-control"
                        type="text" name="username" id="username" placeholder="user vaiu" />
                    <small className='text-danger'>{errors?.username ? "Enter the username" : null}</small>
                </FormGroup>
                <FormGroup>
                    <Label for="vaiuEmail">Email</Label>
                    <input  {...register("email")} className="form-control"
                        type="email" name="email" id="email" placeholder="email@vaiu.com" />
                    <small className='text-danger'>{errors?.email ? "Enter a validate email" : null}</small>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <input  {...register("phone")} className="form-control"
                        type="text" name="phone" id="phone" placeholder="+1 864 400 1821" />
                    <small className='text-danger'>{errors?.phone ? "Enter the phone, minimum 8 characters" : null}</small>
                </FormGroup>
                <div className='text-center'>
                    <Button type='submit' color="warning" size="lg" block >Register</Button>
                </div>
            </Form>
        </>
    )
}

export default Register;