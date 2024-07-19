import { Request, Response } from 'express';
import { EventService } from '../services/events.service';

const eventService = new EventService();

export const createEvent = async (req: Request, res: Response) => {
    try {
        await eventService.createEvent(req.body);
        res.status(201).send('Event created successfully');
    } catch (error: any) {
        res.status(500).send('EVENT NOT CREATED');
    }
};

export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await eventService.getAllEvents();
        res.json(events);
    } catch (error: any) {
        res.status(500).send('Cant get events');
    }
};

export const getEventById = async (req: Request, res: Response) => {
    try {
        const event = await eventService.getEventById(Number(req.params.id));
        res.json(event);
    } catch (error: any) {
        res.status(500).send('cant find event');
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    try {
        await eventService.updateEvent(Number(req.params.id), req.body);
        res.status(200).send('Event updated successfully');
    } catch (error: any) {
        res.status(500).send('event update failed');
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        await eventService.deleteEvent(Number(req.params.id));
        res.status(200).send('Event deleted successfully');
    } catch (error: any) {
        res.status(500).send('event not deleted');
    }
};
