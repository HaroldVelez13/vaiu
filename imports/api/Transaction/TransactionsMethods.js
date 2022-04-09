import SimpleSchema from 'simpl-schema';
import { TransactionsCollection as Transactions } from '../../collections/TransactionsCollection';

Transactions.schema = new SimpleSchema({
    amount: { type: String },
    currency: { type: String },
    validate: {
        duration: { type: String },
        start: { type: Date },
        end: { type: Date },
    },
    location: {
        lat: { type: Number, optional: true },
        stlngart: { type: Number, optional: true },
        rad: { type: Number, optional: true },

    },
    key: { type: String, optional: true },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
    isActive: { type: Boolean, defaultValue: true },
});

Meteor.methods({
    'transactions.insert'(transaction) {
        check(text, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        Transactions.schema.validate(transaction);
        Transactions.insert(transaction)
    },

    'transactions.remove'(transactionId) {
        check(transactionId, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        const transaction = Transactions.findOne({ _id: transactionId, userId: this.userId });

        if (!transaction) {
            throw new Meteor.Error('Access denied.');
        }

        Transactions.remove(transactionId);
    },

    'transactions.update'(transactionId, transaction) {
        check(transactionId, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        Transactions.schema.validate(transaction);

        const transaction = Transactions.findOne({ _id: transactionId, userId: this.userId });

        if (!transaction) {
            throw new Meteor.Error('Access denied.');
        }

        Transactions.update(transactionId, {
            $set: transaction
        });
    },
});