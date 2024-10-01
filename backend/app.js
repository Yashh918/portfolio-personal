import express from 'express'
import cors from 'cors'

const app = express()

// app config
const corsOptions = {
    origin: "https://portfolio-yashh-frontend.onrender.com",
    methods: 'POST',
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.json());


// import routers
import mailRouter from './routes/mail.routes.js'

// import routes
app.use('/contact', mailRouter)


export {app}