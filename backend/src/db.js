const redis = require('redis')
const experience = require('./data/experience')
const education = require('./data/education')

const client =
  process.env.NODE_ENV === 'production'
    ? redis.createClient(process.env.REDIS_URL)
    : redis.createClient()

client.set('experience', JSON.stringify(experience))
client.set('education', JSON.stringify(education))

module.exports = client
