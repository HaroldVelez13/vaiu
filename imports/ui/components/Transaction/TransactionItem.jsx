import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'

const TransactionItem = ({ transaction }) => (
    <Col sm="12" md="4" lg="3" className='m-3'>
        <Card className='shadow'>
            <CardBody className='px-3 py-1'>
                <small>
                    <b>Amount </b>{transaction.amount} {transaction.currency}(s)

                </small>

            </CardBody>
            <CardFooter className='px-2 py-1'>
                {/*   <small><b>Start: </b>{transaction.start}</small>
                <small><b>End: </b>{transaction.end}</small> */}

            </CardFooter>
        </Card>
    </Col>

)


export default TransactionItem