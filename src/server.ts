import http from 'http'
import app from './app'

const server = http.createServer(app)

const port = process.env.PORT || 9010;

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
}).on('error', (e) => {
  console.log('Server error while trying to listen:' + e.toString())
})
