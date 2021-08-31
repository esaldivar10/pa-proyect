const express = require('express'); //primero de lo primero
const cors = require('cors');
const session = require('express-session')

//esto es una clase, que devuelve una funcion
const FileStore = require('session-file-store')(session);

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors({credential: true, origin: 'http://localhost:3000'}));

//voy a intentar correrlo desde afuera porq me generaba la carpeta de sessions dentro del /src

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        store: new FileStore(),
        //puedo ponerle un nombre a la cooki
        name: 'proyect',
}))

app.use(express.json());

//ruteo el modulo requerido con el archivo
app.use('/auth', authRoutes);

app.listen(8000);