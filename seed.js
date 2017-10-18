const express = require('express')
const db = require('./db')
const Campus = require('./db/models').Campus;

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
    console.log('Seeding successful');
    db.close();
    return null;
  });
