'use strict'
const api = require('express').Router()
const db = require('../db/models')
const Campus = db.Campus;
const User = db.User;
const bluebird = require('bluebird');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// api.get('/', (req, res, next) => res.send({hello: 'world'}))


api.get('/', (req, res, next) => {
  db.User.findAll({include: [{all: true}]})
  .then(allData => {
    res.json(allData);
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
	db.Campus.findOne({
		include: [{model: User}],
		where: {
			id: Number(req.params.id)
		}
	})
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
})

api.get('/students/:id', (req, res, next) => {
	db.User.findOne({
		include: [{model: Campus}],
		where: {
			id: Number(req.params.id)
		}
	})
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

api.delete('/campuses/:id', (req, res, next) => {
  const id = Number(req.params.id);
  db.User.destroy({
    where: {campusId: id}
  })
  .then(()=>db.Campus.destroy({
    where: {id}
  })
).then(()=>res.sendStatus(202))
.catch(next)
});

api.get('/students', (req, res, next) => {
  db.User.findAll({include:[{model: Campus}]})
  .then((students) => {
    res.status(200).json(students);
  })
  .catch(next);
})

api.delete('/students/:id', (req, res, next) => {
  const id = Number(req.params.id);
  db.User.destroy({
     where: { id }
    })
    .then(()=>res.sendStatus(202))
    .catch(next);
});

api.post('/students', function (req, res, next) {
  db.User.create(req.body)
  .then ((students) => {
    res.status(201).json(students);
  })
  .catch(next);
})

api.post('/campus', function (req, res, next) {
  db.Campus.create(req.body)
  .then ((students) => {
    res.status(201).json(students);
  })
  .catch(next);
})

module.exports = api
