import express from 'express'
import cors from 'cors'

const app = express()

// app config
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || origin === "https://portfolio-yashh-frontend.onrender.com" || origin.includes("uptimerobot.com")) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ['POST', 'GET'],
    credentials: true
};
app.use(cors(corsOptions))
app.use(express.json());


// import routers
import mailRouter from './routes/mail.routes.js'
import pingRouter from './routes/ping.routes.js'

// import routes
app.use('/ping', pingRouter)
app.use('/contact', mailRouter)


export {app}