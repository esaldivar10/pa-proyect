const express = require('express'); //primero de lo primero
const authRoutes = require('./routes/auth');

const app = express();

//ruteo el modulo requerido con el archivo
app.use('/auth', authRoutes);

app.listen(8000);