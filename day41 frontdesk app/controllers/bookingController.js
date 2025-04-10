
const Booking = require("../models/Booking");

const transporter = require("../config/mailer");

exports.createBooking = async(req, res) => {
    const{customeName, email, service, date} = req.body;

    try {
        const booking = await Booking.create({
            customeName,
            service,
            date,
            email,
            createdBy: req.user.userId

        });

        //send email

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Booking Confirmed",
            html: `<p>Dear ${customeName}, <br> You have booked for <b>${service}<b> on <b>${date}</b> is confirmed </p>`
        })
        res.status(201).json({message: "Booking is created and email is sent", booking})
    } catch(err){
        res.status(500).json({err: err.message})
    }
}


exports.getAllBookings = async(req, res) => {
    const bookings = await Booking.find().populate("createdBy", "name role");
    res.json(bookings)
}