const { Gig } = require("../models/models");
module.exports.createGig = (req, res) => {
    Gig.create(req.body)
        .then(i => res.json(i))
        .catch(err => res.status(400).json(err));
}
module.exports.getAllGigs=(req,res)=>{
    Gig.find().collation({locale: "en" }).sort({name:1})
    .then(i=>res.json(i))
    .catch(e=>res.json(e))
    }
module.exports.getGig=(req,res)=>{
    Gig.findById(req.params.id)
    .then(i=>res.json(i))
    .catch(e=>res.json(e))
}
module.exports.deleteGig=(i,j)=>{
    Gig.findByIdAndDelete(i.params.id)
    .then(e=>j.json(e))
    .catch(e=>j.jason(e))
}
module.exports.updateGig=(req,res)=>{
    Gig.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    .then(e=>res.json(e))
    .catch(e=>res.status(400).json(e))
}
