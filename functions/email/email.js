const process = require('process');

const nodemailer = require('nodemailer');

const handler = async (event) => {

    try {
        let emailPayload = JSON.parse(event.body);
        let emailBody = "Name: " + emailPayload.Name.toString() + "\n" + "Email: " + emailPayload.Email.toString() + "\n\n" + emailPayload.Details.toString();

        let emailAccount = JSON.parse(process.env.EMAIL_ACCOUNT);

        let transporter = nodemailer.createTransport({
            service: emailAccount.EmailServiceProvider,
            auth: {
                user: emailAccount.Username,
                pass: emailAccount.Password
            }
        });

        let mailOptions = {
            from: emailAccount.Username,
            to: process.env.TARGET_EMAIL,
            subject: process.env.EMAIL_SUBJECT + emailPayload.Subject,
            text: emailBody
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return {statusCode: 500, body: error.toString()}
            } else {
                return {statusCode: 200, body: "Message Sent!"};
            }
        });





    } catch (error) {
        // console.log(error);
        return {statusCode: 500, body: error.toString()}
    }
}

module.exports = {handler}
