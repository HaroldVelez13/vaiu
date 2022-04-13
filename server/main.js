import '/imports/api/User/UserMethods';
import '/imports/api/Transaction/TransactionsMethods'
import '/imports/api/Transaction/TransactionsPublications'
import { user_email, user_password } from '../imports/api/Utils/Globals';


Meteor.startup(function () {
    if (Meteor.isServer) {
        //deleted @gmail from user_email
        const mail = user_email.slice(0, -10)
        const pass = user_password;
        process.env.MAIL_URL = `smtps://${mail}%40gmail.com:${pass}@smtp.gmail.com:465/`;
    }
});