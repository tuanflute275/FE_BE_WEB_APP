import express from 'express'
const app = express()
import cors from 'cors'
import morgan from 'morgan'
import initApiRouter from './routes/api.router'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.ANGULAR_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(cors())
app.options('*', cors())
app.use(express.static('src/public'))
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
initApiRouter(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})