import {Request, Response} from 'express';
import { BookingService } from '../services/bookings.service';

const bookingService = new BookingService();

export const createBooking = async (req: Request, res: Response) => {
    try{
        await bookingService.createBooking(req.body);
        res.status(201).send('Booking created successfully');
    } catch (error:any){
        res.status(500).send('Booking error');
    }
};

export const getAllBookings = async (req: Request, res: Response) => {
    try{
        const bookings = await bookingService.getAllBookings();
        res.json(bookings);
    } catch (error:any){
        res.status(500).send('get Booking error');
    }
};

export const getBookingById = async (req: Request, res: Response) => {
    try{
        const booking = await bookingService.getBookingById(Number(req.params.id));
        res.json(booking);
    } catch (error:any){
        res.status(500).send('get Booking error');
    }
};

export const deleteBooking = async (req: Request, res: Response) => {
    try{
        await bookingService.deleteBooking(Number(req.params.id));
        res.status(200).send('Booking deleted successfully');
    } catch (error:any){
        res.status(500).send('delete Booking error');
    }
};