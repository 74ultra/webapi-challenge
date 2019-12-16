const Projects = require('../data/helpers/projectModel.js');

function validateProjectData(){
    return (req, res, next) => {
        if(!req.body.name || !req.body.description){
            return res.status(400).json({ error: "A new project requires a name and description"})
        } else {
            next();
        }
    }
}

function validateProjectId(){
    return (req, res, next) => {
        Projects.get(req.params.id)
            .then(project => {
                if(project){
                    req.project = project
                    next()
                } else {
                    res.status(404).json({error: `A project with an id of ${req.params.id} does not exist.`})
                }
            })
    }
}

module.exports = {
    validateProjectData,
    validateProjectId

}