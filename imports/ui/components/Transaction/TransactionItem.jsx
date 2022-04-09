import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'

const TransactionItem = ({ transaction }) => (
    <Col sm="12" md="4" lg="3" className='m-3'>
        <Card className='shadow'>
            <CardBody className='px-3 py-1'>
                <small>
                    {transaction.amount}
                </small>

            </CardBody>
            <CardFooter className='px-2 py-1'>
                <small>footer</small>

            </CardFooter>
        </Card>
    </Col>

)


export default TransactionItem