const C = require('../controllers/controllers');
module.exports = function(app){
    app.post('/api/gig', C.createGig);
    app.get('/api/gigs',C.getAllGigs);
    app.get('/api/gig/:id',C.getGig);
    app.delete('/api/gig/:id',C.deleteGig);
    app.put('/api/gig/:id',C.updateGig);
}