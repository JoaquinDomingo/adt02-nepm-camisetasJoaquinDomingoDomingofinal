const { urlencoded } = require('body-parser')
const db = require('../db')

exports.camisetas = (req,res) =>{
    let query = 'SELECT * FROM usuario'

    db.query(query, (error, resultado) =>{
        if(error) {
            res.render('error',{
                mensaje: 'Imposible de acceder a usuario'})
        } else{
            res.render('usuario/list', {usuarios: resultado})
        }
    })
}

exports.usuario= (req, res) =>{
    const { id } = req.params;
    if (isNaN(id)){
        res.render(
            'error',
            {mensaje:'USUARIO GET PARÁMETROS INCORRECTOS'}
        )
    }
    let query= 'SELECT * FROM usuario where id=?'

    db.query(query, id, (error, resultado)=>{
        if(error){
            res.render('error', {
                mensaje: 'Imposible acceder al usuario'})
        } else {
            res.render('usuario/list', {camisetas: resultado})
        }
    })


exports.usuarioAddForm = (req,res) => {
    res.render('usuario/add')
}

exports.usuarioAdd = (req, res) =>{
    const {nombre_usuario, contraseña, email,  
    telefono, direccion, tipo} =req.body


}
}