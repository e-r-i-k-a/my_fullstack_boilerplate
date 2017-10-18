const express = require('express')
const db = require('./db')
const Campus = require('./db/models').Campus;
const Student = require('./db/models').User;

db
  .sync({ force: true })
  .then(() => {
    console.log('Seeding database');
    return Campus.bulkCreate([
      {
        name: 'Luna',
        image: '/luna.png'
      },
      {
        name: 'Mars',
        image: '/mars.png'
      },
      {
        name: 'Terra',
        image: '/terra.png'
      },
      {
        name: 'Titan',
        image: '/titan.png'
      }
    ]);
  })
  .then(() => {
    console.log('Seeding database');
    return Student.bulkCreate([
      {
        name: 'erika',
        email: 'erika@aol.com',
        campusId: '1'
      },
      {
        name: 'george',
        email: 'george@aol.com',
        campusId: '1'
      },
      {
        name: 'heather',
        email: 'heather@aol.com',
        campusId: '2'
      },
      {
        name: 'david',
        email: 'david@aol.com',
        campusId: '3'
      },
      {
        name: 'shelley',
        email: 'shelley@aol.com',
        campusId: '4'
      }
    ]);
  })
  .then(() => {
    console.log('Seeding successful');
    db.close();
    return null;
  });
