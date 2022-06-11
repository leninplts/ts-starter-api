import config from './config/config'
import app from './server'

const port = config.server.port

app.listen(port, () => {
  console.log(port)
  console.log(`⚡️⚡️⚡️⚡️ Server: running in http://127.0.0.1:${port}`)
})
