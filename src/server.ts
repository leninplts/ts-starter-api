import morgan from 'morgan'
import cors from 'cors'
import express, { Express } from 'express'

import BaseRouter from './routes/index.routes'

const app: Express = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api', BaseRouter)

export default app
