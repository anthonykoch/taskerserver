import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ "absolutely incredible": "amazing"})
});

export default app
