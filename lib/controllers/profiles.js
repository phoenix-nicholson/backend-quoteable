const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');
const fetch = require('cross-fetch');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const data = await resp.json();
  const profile = await Profile.insert({
    name: req.body.name,
    quote: data[0].quote,
  });

  console.log('profile', profile);
  res.send(profile);
});
