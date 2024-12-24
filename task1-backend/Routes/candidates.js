const express = require('express');
const router = express.Router();

const {getAllCandidates  } = require('../Controllers/candidates.js')

router.get('/cadidates', getAllCandidates )

module.exports = router