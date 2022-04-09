import { Meteor } from 'meteor/meteor';
import { TransactionsCollection } from '../../collections/TransactionsCollection';

Meteor.publish('transactions', function publishTransactions() {
    return TransactionsCollection.find({ userId: this.userId });
});