import { Email } from 'meteor/email'
import { user_email } from './Globals'


const SendPasswordByEmail = (username, email, password) => {
    const options = {
        from: user_email,
        to: email,
        subject: "Welcome to Vaiu",
        html: ` <h3>Welcome to Vaiu</h3>, 
                <p>
                the password for user <b>${username}</b> is: <b>${password}</b>
                </p>`,

    }
    Email.send(options);

}

export default SendPasswordByEmail