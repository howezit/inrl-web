require('../settings');
const nodemailer = require('nodemailer');
const mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'inrlwabots@gmail.com',
		pass: email_pass
	}
});
async function sendMail(id, otp) {
let mailDetails = {
	from: 'inrlwabots@gmail.com',
	to: id,
	subject: 'VERIFICATION',
	html: `<html>
    <body>
        <h4 align="center">Verification</h4>
        <p>The 6 digit number given below is your verification code, after copying this you can go to the bot number and use verify cmd to verify it, but you can give a limit to the primimum cmds.</p>
        <h3 align="center">copy the Below code</h2><br>
        <font size="30" align="center">${otp}</font>
    </body>
</html>`
};
mailTransporter.sendMail(mailDetails, function(err, data) {
	if (err) return false;
	return true;
});
}
module.exports = {sendMail};
