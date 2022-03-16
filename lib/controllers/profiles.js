const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');
const fetch = require('cross-fetch');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const profile = await ProfileService.create(req.body);

  console.log('profile', profile);
  res.send(profile);
});
