const router = require('express').Router();
let Sport = require('../models/sports.model');


router.route('/').get((req, res) => {
  Sport.find()
    .then(sport => res.json(sport))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
  Sport.findById(req.params.id)  
    .then(sport => res.json(sport))  
    .catch(err => res.status(400).json('Error: ' + err));  
});

router.route('/add').post((req, res) => {
  const heading = req.body.heading
  const img = req.body.img
  const description = req.body.description
  const newSport = new Sport ({
    heading,
    img,
    description
  })
  newSport.save().then(() => {
  res.json('Sport added')
}).catch((err) =>{
  res.status(400).json("Error: " + err)
})
})




module.exports = router;