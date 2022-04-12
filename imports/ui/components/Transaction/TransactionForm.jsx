import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react'
import { Form, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const transactionSchema = yup.object({
    currency: yup.string().required(),
    amount: yup.number().positive().integer().required(),
}).required();

const TransactionForm = ({ modal, toggle }) => {
    const toDay = new Date()
    const tomorrow = new Date(Date.now() + (3600 * 1000 * 24))
    const [startDate, setStartDate] = useState(toDay);
    const [endDate, setEndDate] = useState(tomorrow);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(transactionSchema)
    });
    const onSubmit = (transaction) => {
        transaction.start = startDate
        transaction.end = endDate
        Meteor.call('transactions.insert', transaction, (error) => {
            if (error) {
                console.log(error)
            }
            else {
                toggle()
            }
        });
    };

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Transaction Form</ModalHeader>
            <ModalBody className='p-4 mt-3'>
                <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <input  {...register("amount")} className="form-control"
                            type="number" name="amount" id="amount" placeholder="0" min={0} />
                        <small className='text-danger'>{errors?.amount ? "Enter a quantity of at least 1" : null}</small>
                    </FormGroup>
                    <FormGroup>
                        <Label for="currency">Currency</Label>
                        <select {...register("currency")} className="form-select"
                            type="select" name="currency" id="currency">
                            <option value={null}></option>
                            <option value="dollar">Dollar</option>
                            <option value="euro">Euro</option>
                            <option value="colombian pesos">Colombian pesos</option>
                        </select>
                        <small className='text-danger'>{errors?.currency ? "Select Currency" : null}</small>
                    </FormGroup>
                    <Row className='my-3'>
                        <Col sm="6">
                            <FormGroup>
                                <Label >Start Date</Label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label >end Date</Label>
                                <DatePicker selected={endDate} minDate={startDate} onChange={(date) => setEndDate(date)} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <div className='text-center'>
                        <Button color="warning" size="lg" block type='submit'>Create</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>

    )
}

export default TransactionForm