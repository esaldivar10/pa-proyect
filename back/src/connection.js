const bd = require('mysql2');

const connection = bd.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyect-pa',
}); 

connection.connect((error)=>{
    if(error){
        console.log('No me pude conectar a la Base de Datos');
    }else{
        console.log('Estas conectado a la BD!');
    }
});

module.exports = connection;