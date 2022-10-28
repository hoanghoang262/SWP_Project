import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hoangcanada2002@gmail.com",
        pass: 'xeincnrjxjgbmyqr'
    }
});

send();

function error (error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }

async function send() {
    const result = await transporter.sendMail({
        from: "hoangcanada2002@gmail.com",
        to: "hoangnhhe160531@fpt.edu.vn",
        subject: 'Hello World',
        text: 'Hello World'
    },error);

    console.log(JSON.stringify(result, null, 4));
}