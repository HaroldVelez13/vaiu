import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import crypto from 'crypto'



Meteor.methods({
    'users.register'(username, phone, email) {
        check(username, String);
        check(phone, String);
        check(email, String);

        if (Accounts.findUserByUsername(username)) {
            throw new Meteor.Error('user-exist', "This username is in use now");
        }

        const password = crypto.randomBytes(4).toString('hex');
        console.log("password****", password)
        Accounts.createUser({
            username: username,
            password: password,
            profile: {
                phone: phone,
                email: email,
            }
        });

    },

});