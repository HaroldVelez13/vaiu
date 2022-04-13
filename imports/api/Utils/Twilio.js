import twilio from "twilio";
import { twilio_account, twilio_phone, twilio_token } from "./Globals";

const client = new twilio(twilio_account, twilio_token);

const sendPasswordBySms = (username, phone, password) => {
    client.messages
        .create({
            body: `Welcome to Vaiu, the password for user ${username} is: ${password}`,
            to: `+57${phone}`,
            from: twilio_phone
        }).then((message) => console.log(message.sid));
}

export default sendPasswordBySms;