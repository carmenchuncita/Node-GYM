const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { 
        type: String, 
        required: true, 
        enum: ['room-1', 'room-2', 'room-3']
    },
    type: { 
        type: String, 
        required: true,
        enum: ['cardio', 'flexibility', 'force']
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
