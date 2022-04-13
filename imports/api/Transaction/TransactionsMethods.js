import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { TransactionsCollection as Transactions } from '../../collections/TransactionsCollection';
import crypto from 'crypto'

Transactions.schema = new SimpleSchema({
    amount: { type: Number },
    currency: { type: String },
    start: { type: Date },
    end: { type: Date },
    createAt: { type: Date },
    /*  location: {
         lat: { type: Number, optional: true },
         stlngart: { type: Number, optional: true },
         rad: { type: Number, optional: true },
 
     }, */
    key: { type: String, optional: true },
    userId: { type: String, optional: true },
    isActive: { type: Boolean, defaultValue: true },
});

Meteor.methods({
    'transactions.insert'(transaction) {
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        //generate key and associate isActive and userId
        transaction.key = crypto.randomBytes(3).toString('hex');
        transaction.isActive = true;
        transaction.userId = this.userId;
        transaction.createAt = new Date();

        //validate data
        Transactions.schema.validate(transaction);
        //save
        Transactions.insert({ ...transaction })
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

    'transactions.setIsActive'(transactionId, isActive) {
        check(transactionId, String);
        check(isActive, Boolean);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        const transaction = Transactions.findOne({ _id: transactionId, userId: this.userId });

        if (!transaction) {
            throw new Meteor.Error('Access denied.');
        }

        Transactions.update(transactionId, {
            $set: {
                isActive,
            },
        });
    },
});