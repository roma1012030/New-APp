module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new CarAd
    app.post('/notes', notes.create);

    // Retrieve all CarAd
    app.get('/notes', notes.findAll);

    // Retrieve a single CarAd with CarAdId
    app.get('/notes/:noteId', notes.findOne);

    // Update a CarAd with CarAdID
    app.put('/notes/:noteId', notes.update);

    // Delete a CarAd with CarAdId
    app.delete('/notes/:noteId', notes.delete);
}
