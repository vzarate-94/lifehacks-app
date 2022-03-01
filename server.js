import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

// Import routes
import { router as usersRouter} from './routes/users.js'
import { router as authRouter } from './routes/auth.js'

import './config/database.js'

const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// Use routes
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)


app.get('/*', (req, res) => {
    res.sendFile(
        path.join(
            path.dirname(fileURLToPath(import.meta.url)),
            'build',
            'index.html'
        )
    )
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})