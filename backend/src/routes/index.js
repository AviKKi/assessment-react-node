const express = require('express')
const controllers = require('../controllers')

const router = express.Router()

router.use('/education', controllers.education)
router.use('/experience', controllers.experience)
router.use('/randomNumber', controllers.randomNumber)
router.use('/stonePaperScissor', controllers.stonePaperScissor)

module.exports = router
