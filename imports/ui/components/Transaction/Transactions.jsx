import React, { useState } from 'react'
import { Button, Row } from 'reactstrap'
import TransactionForm from './TransactionForm'
import TransactionItem from './TransactionItem'

const transactions = [
    { _id: 1, amount: "uno" },
    { _id: 2, amount: "dos" },
    { _id: 3, amount: "utres" },
    { _id: 4, amount: "cuatro" }
]
const Transactions = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Button color="warning" onClick={toggle}>Add</Button>
            <Row>
                {transactions.map(transaction =>
                    <TransactionItem key={transaction._id} transaction={transaction} />
                )}
            </Row>
            <TransactionForm modal={modal} toggle={toggle} />
        </>
    )
}

export default Transactions