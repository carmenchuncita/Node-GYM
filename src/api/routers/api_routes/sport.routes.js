const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../../middleware/jwt-auth');  
const {
    // getEvents,
    // getEventById,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../../controllers/sport.controller');


// router.get('/getAllEvents', getEvents);
// router.get('/events/:eventId', getEventById);
//protected by authentication and only accessible to admin
router.post('/createEvent', authenticateToken, createEvent);
//protected by authentication and only accessible to admin
router.put('/updateEvent/:eventId', authenticateToken, updateEvent);
// // protected by authentication and only accessible to admin
router.delete('/deleteEvent/:eventId', authenticateToken, deleteEvent);

module.exports = router;
