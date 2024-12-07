const Event = require('../models/sport.model');

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener los eventos", error: error.message });
    }
};

const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).send({ message: "Evento no encontrado" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).send({ message: "Error al obtener el evento", error: error.message });
    }
};

const createEvent = async (req, res) => {
    const { name, description, date, location, type } = req.body;
    try {
        const newEvent = new Event({ name, description, date, location, type });
        await newEvent.save();
        res.status(201).send({ message: "Evento creado con éxito", event: newEvent });
    } catch (error) {
        res.status(400).send({ message: "Error al crear el evento", error: error.message });
    }
};

const updateEvent = async (req, res) => {
    const { name, description, date, location, type } = req.body;
    try {
        const event = await Event.findByIdAndUpdate(req.params.eventId, { name, description, date, location, type }, { new: true });
        if (!event) {
            return res.status(404).send({ message: "Evento no encontrado" });
        }
        res.status(200).send({ message: "Evento actualizado con éxito", event });
    } catch (error) {
        res.status(400).send({ message: "Error al actualizar el evento", error: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.eventId);
        if (!event) {
            return res.status(404).send({ message: "Evento no encontrado" });
        }
        res.status(200).send({ message: "Evento eliminado con éxito" });
    } catch (error) {
        res.status(500).send({ message: "Error al eliminar el evento", error: error.message });
    }
};

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
};
