const express = require("express");
const router = express.Router();

const{createBooking, getAllBookings} = require("../controllers/bookingController");

const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware")


router.post("/", auth, authorize("Admin", "Receptionist", "Manager"),  createBooking);
router.get("/",auth, authorize ("Admin", "Manager"), getAllBookings)

module.exports = router;