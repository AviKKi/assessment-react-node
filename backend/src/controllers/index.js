const db = require('../db')
const redis = require('redis')

const experience = (req, res) => {
  res.setHeader('content-type', 'text/json')

  db.get('experience', (err, data) => {
    if (err) res.send([])
    else {
      res.send(JSON.parse(data))
    }
  })
}

const education = (req, res) => {
  res.setHeader('content-type', 'text/json')

  db.get('education', (err, data) => {
    if (err) res.send([])
    else {
      res.send(JSON.parse(data))
    }
  })
}

const randomNumber = (req, res) => {
  res.send({
    number: Math.floor(Math.random() * 9) + 1
  })
}

const stonePaperScissor = (req, res) => {
  res.send({
    number: Math.floor(Math.random() * 3)
  })
}

module.exports = { experience, education, randomNumber, stonePaperScissor }
