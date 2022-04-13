import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col, Input, Label } from 'reactstrap'
import moment from 'moment'

const TransactionItem = ({ transaction }) => {
    const [diff, setDiff] = useState()

    useEffect(() => {
        const starDate = moment(transaction.start);
        const endDate = moment(transaction.end);
        const _diff = endDate.diff(starDate, 'days')
        setDiff(_diff)
    }, [transaction])

    const handledDelete = () => {
        const id = transaction._id
        Meteor.call('transactions.remove', id);
    }

    const haledChange = () => {
        const id = transaction._id
        const isActive = !transaction.isActive
        Meteor.call('transactions.setIsActive', id, isActive);
    }
    return (
        <Col xs="12" sm="6" md="4" lg="3" className='my-3'>
            <Card className='shadow'>
                <CardHeader>
                    <a onClick={handledDelete} href="#" className='text-muted hover-text-danger' title="Delete">
                        <i className="fa-solid fa-trash float-end"></i>
                    </a>
                </CardHeader>
                <CardBody className='px-3 py-1'>
                    <>
                        <p className='my-1 '>
                            <b>Amount: </b>{transaction.amount} {transaction.currency}(s)
                        </p>
                        <p className='my-1 '>
                            <b>Start date: </b>{moment(transaction.start).format('LL')}
                        </p>
                        <p className='my-1 '>
                            <b>End date: </b>{moment(transaction.end).format('LL')}
                        </p>
                        <p className='my-1 '>
                            <b>Duration: </b>{diff}
                        </p>
                    </>
                </CardBody>
                <CardFooter className='px-2 py-1'>
                    <p className='my-1 float-start'>
                        <Label check>
                            <Input type="checkbox" checked={transaction.isActive} onChange={haledChange} />{' '}
                            Is Active
                        </Label>
                    </p>
                    <p className='my-1 float-end'><b>Key: </b>{transaction.key}</p>

                </CardFooter>
            </Card>
        </Col>

    )
}


export default TransactionItem