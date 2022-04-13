import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import crypto from 'crypto'
import sendPasswordBySms from '../Utils/Twilio';


Meteor.methods({
    'users.register'(user) {
        const { username, phone, email } = user
        check(username, String);
        check(phone, String);
        check(email, String);
        const clearPhone = phone.replace(/^[ ]+/g, "");

        if (Accounts.findUserByUsername(username)) {
            throw new Meteor.Error('user-username-exist', "This username is in use now");
        }
        if (Accounts.findUserByEmail(email)) {
            throw new Meteor.Error('user-email-exist', "This email is in use now");
        }
        const password = crypto.randomBytes(4).toString('hex');
        sendPasswordBySms(username, clearPhone, password)
        console.log("password****", password)
        Accounts.createUser({
            username: username,
            password: password,
            email: email,
            phone: clearPhone
        });

    },

});