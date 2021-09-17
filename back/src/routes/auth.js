const express = require('express');
const connection = require('../connection');

const router = express.Router();

//inicio de sesion: request or response
router.post('/', (req, res)=>{
    //en el body tengo los datos
    const email = req.body.email;
    const pw = req.body.pw;

    const sql = `SELECT *
                FROM usuarios
                WHERE email =?
                AND contraseña = ?`;
    
    connection.query(sql, [email, pw], (err, result)=>{
        if (err) {
            console.log('Hubo un eror al verificar el usuario en la BD');            
        } else {
            //console.log('Aca hay que hacer la verificacion con los datos ingresados');
            if (result.length === 1) {
                console.log(result);
                const usuarioCompleto =`${result[0].nombre_usuario}`;
                
                //aca puedo guardar lo que quiera, asociandolo a la cookie
                // req.session.user = {
                    // name: result[0].nombre_usuario
                // }
                //console.log(req.session.user);

                res.json({message:'Usuario válido', data: result[0]});
                
            } else {
                res.status(403).json({
                    message: 'La contraseña y/o el Usuario son inválidos',
                    data : null,
                });
                
            }
        }
    });

});

//cerrar sesion
router.delete('/', (req, res)=>{})

module.exports = router;