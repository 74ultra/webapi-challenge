const express = require('express')

// import action model helper functions
const Actions = require('../data/helpers/actionModel.js');

// use express router
const router = express.Router();


// Get all actions
router.get('/', (req, res) => {
    Actions.get()
        .then(actions => {
            if(actions){
                return res.status(200).json(actions)
            } else {
                return res.status(404).json({ error: 'No actions were found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: `There was an error getting actions`})
        })
})


router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Actions.get(id)
        .then(action => {
            if(action){
                console.log(action)
                res.status(200).json(action)
            } else {
                res.status(404).json({ error: `An action with an id of ${id} does not exist.`})
            }
            
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: `There was an error getting the specified action`})
        })
})

module.exports = router;