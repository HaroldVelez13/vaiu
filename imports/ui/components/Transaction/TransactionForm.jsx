import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionForm = ({ modal, toggle }) => {

    const [transaction, setTransaction] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onChangeHandler = (field, value) => {
        const newTransaction = transaction
        newTransaction[field] = value;
        setTransaction(newTransaction)
    }
    const onClickHandler = () => {
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
    }
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Transaction Form</ModalHeader>
            <ModalBody className='p-4 mt-3'>
                <Form>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input onChange={(e) => onChangeHandler("amount", e.target.value)}
                            type="number" name="username" id="amount" placeholder="0" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="currency">Currency</Label>
                        <Input onChange={(e) => onChangeHandler("currency", e.target.value)}
                            type="select" name="select" id="currency">
                            <option >Select Currency</option>
                            <option value="dollar">Dollar</option>
                            <option value="euro">Euro</option>
                            <option value="colombian pesos">Colombian pesos</option>
                        </Input>
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
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <div className='text-center'>
                        <Button onClick={onClickHandler} color="warning" size="lg" block>Create</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>

    )
}

export default TransactionForm