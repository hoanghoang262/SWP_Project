import nodemailer from "nodemailer"

export const sendEmail = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "hoangcanada2002@gmail.com",
				pass: "xeincnrjxjgbmyqr",
			},
		});

		await transporter.sendMail({
			from: "hoangcanada2002@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
		console.log("An email is send to your email account: " +  email +  " \nPlease verify")
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};