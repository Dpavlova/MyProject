var express = require('express');
var router = express.Router();

var Project = require('../models/project');

router.get('/', function(req, res, next) {
    Project.find()
        .exec(function(err, projects) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: projects
            });
        });
});

router.get('/:id', function(req, res, next) {
    Project.findById(req.params.id, function(err, project) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: project
        });
    });
});

router.post('/', function (req, res, next) {
    var project = new Project({
        projectName: req.body.projectName,
        clientName: req.body.clientName,
        estTime: req.body.estTime,
        timeUsed: req.body.timeUsed 
    });
    project.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved project',
            obj: result
        });
    });
});

router.patch('/:id', function(req, res, next) {
    Project.findById(req.params.id, function(err, project) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured !!!',
                error: err
            });
        }
        if(!project) {
            return res.status(500).json({
                title: 'No Project Found!',
                error: {project: 'Project Not Found!'}
            });
        }
        project.projectName = req.body.projectName;
        project.clientName = req.body.clientName;
        project.estTime = req.body.estTime;
        project.timeUsed = req.body.timeUsed;
        project.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                project: 'Updated project',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Project.findById(req.params.id, function(err, project) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if(!project) {
            return res.status(500).json({
                title: 'No Project Found!',
                error: {project: 'Project Not Found!'}
            });
        }
        project.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                project: 'Deleted project',
                obj: result
            });
        });
    });
})

module.exports = router;
