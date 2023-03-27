const { Profile } = require('../models')

async function index(req, res) {
  try {
    const profiles = await Profile.findAll()
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}


module.exports = { index, addPhoto }
