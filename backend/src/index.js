const db = require('./db')
const app = require('./app')

app.listen(process.env.PORT, () =>
  console.log(` [i] Backend listening on port ${process.env.PORT}`)
)
