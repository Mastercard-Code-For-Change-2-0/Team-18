import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'albatross15200@gmail.com', // Your email
        pass: 'ukux kauo dbul lfcs'  // Your email password or app password
    }
});

export default transporter;