import { Router } from "express";
import { createBooking, deleteBooking, getAllBookings, getBookingById } from "../controllers/bookings.controller";

const router = Router();

router.post('/bookings', createBooking);

router.delete('/bookings/:id', deleteBooking);

router.get('/bookings', getAllBookings);

router.get('/bookings/:id', getBookingById);

export default router;