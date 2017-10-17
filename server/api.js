'use strict'
const api = require('express').Router()
const db = require('../db/models')
const bluebird = require('bluebird');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// api.get('/', (req, res, next) => res.send({hello: 'world'}))

var allData = {};

api.get('/', (req, res, next) => {

  var dbRetrieval = [
    db.User.findAll()
    .then((users) => {
      allData.Users = users;
    }),
    db.Campus.findAll()
    .then((campuses) => {
      allData.Campuses = campuses;
    })
	]

  Promise.all(dbRetrieval)
  .then ((data) => {
    res.status(200).json(allData);
  })
  .catch(next)
})

api.get('/campuses', (req, res, next) => {
  db.Campus.findAll()
  .then((campuses) => {
    res.status(200).json(campuses);
  })
  .catch(next);
})

api.get('/campuses/:id', (req, res, next) => {
  db.Campus.findById(req.params.id)
  .then((campus) => {
    res.status(200).json(campus);
  })
  .catch(next);
})

api.get('/students', (req, res, next) => {
  db.User.findAll()
  .then((students) => {
    res.status(200).json(students);
  })
  .catch(next);
})

api.delete('/students/:id', (req, res, next) => {
  const id = req.params.id;
  db.User.destroy({
     where: { id }
    })
    .then(() => {
      db.User.findAll()
    })
    .then((students) => {
      res.status(204).json(students)
    })
    .catch(next);
});

api.post('/students', function (req, res, next) {
  console.log(req.body);
  db.User.create(req.body)
  .then((newUser) => {
    db.User.findAll()
  })
  .then ((students) => {
    res.status(201).json(students);
  })
  .catch(next);
})

module.exports = api
