import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react'
import { Button, Row } from 'reactstrap'
import { TransactionsCollection } from '../../../collections/TransactionsCollection';
import TransactionForm from './TransactionForm'
import TransactionItem from './TransactionItem'


const Transactions = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const transactions = useTracker(() => {

        const handler = Meteor.subscribe('transactions');
        if (!Meteor.user()) {
            return;
        }
        if (!handler.ready()) {
            return;
        }
        const transactions = TransactionsCollection.find({}, {
            sort: { createdAt: -1 },
        }).fetch();
        return transactions;
    });
    return (
        <>
            <Button color="warning" onClick={toggle}>Add</Button>
            <Row>
                {transactions?.map(transaction =>
                    <TransactionItem key={transaction._id} transaction={transaction} />
                )}
            </Row>
            <TransactionForm modal={modal} toggle={toggle} />
        </>
    )
}

export default Transactions