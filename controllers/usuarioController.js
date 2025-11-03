const { urlencoded } = require('body-parser')
const db = require('../db')
const bcrypt = require('bcrypt')

exports.usuarios = (req, res) => {
    let query = 'SELECT * FROM usuario'
    db.query(query, (error, resultado) => {
        if (error) {
            res.render('error', { mensaje: 'Imposible acceder a los usuarios' })
        } else {
            res.render('usuario/list', { usuarios: resultado })
        }
    })
}

exports.usuario = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.render('error', { mensaje: 'USUARIO GETONE PARÁMETROS INCORRECTOS' })
    }
    let query = 'SELECT * FROM usuario WHERE id=?'
    db.query(query, id, (error, resultado) => {
        if (error) {
            res.render('error', { mensaje: 'Imposible acceder al usuario' })
        } else {
            res.render('usuario/list', { usuarios: resultado })
        }
    })
}

exports.usuarioAddForm = (req, res) => {
    res.render('usuario/add')
}

exports.usuarioAdd = async (req, res) => {
    const { nombre_usuario, contraseña, email, telefono, direccion, tipo } = req.body
    try {
        const hash = await bcrypt.hash(contraseña, 10)
        const sql = `
            INSERT INTO usuario
            (nombre_usuario, contraseña, email, telefono, direccion, tipo)
            VALUES (?, ?, ?, ?, ?, ?)
        `
        db.query(sql, [nombre_usuario, hash, email, telefono, direccion, tipo], (error) => {
            if (error) {
                console.log(error)
                res.render('error', { mensaje: 'Imposible añadir el usuario' })
            } else {
                res.redirect('/admin/usuario')
            }
        })
    } catch (err) {
        console.log(err)
        res.render('error', { mensaje: 'Error al encriptar la contraseña' })
    }
}

exports.usuarioUpdateForm = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.render('error', { mensaje: 'USUARIO GETONE PARÁMETROS INCORRECTOS' })
    }
    const query = 'SELECT * FROM usuario WHERE id=?'
    db.query(query, id, (error, resultado) => {
        if (error) {
            res.render('error', { mensaje: 'Imposible acceder al usuario' })
        } else {
            const datos = resultado[0]
            res.render('usuario/edit', { datos })
        }
    })
}

exports.usuarioUpdate = async (req, res) => {
    const { id } = req.params
    const { nombre_usuario, contraseña, email, telefono, direccion, tipo } = req.body
    try {
        const hash = await bcrypt.hash(contraseña, 10)
        const sql = `
            UPDATE usuario SET
                nombre_usuario = ?,
                contraseña = ?,
                email = ?,
                telefono = ?,
                direccion = ?,
                tipo = ?
            WHERE id = ?
        `
        db.query(sql, [nombre_usuario, hash, email, telefono, direccion, tipo, id], (error) => {
            if (error) {
                console.log(error)
                res.render('error', { mensaje: 'Imposible actualizar el usuario' })
            } else {
                res.redirect('/admin/usuario')
            }
        })
    } catch (err) {
        console.log(err)
        res.render('error', { mensaje: 'Error al encriptar la contraseña' })
    }
}

exports.usuarioDeleteForm = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.render('error', { mensaje: 'USUARIO GETONE PARÁMETROS INCORRECTOS' })
    }
    const query = 'SELECT * FROM usuario WHERE id=?'
    db.query(query, id, (error, resultado) => {
        if (error) {
            res.render('error', { mensaje: 'Imposible acceder al usuario' })
        } else {
            const datos = resultado[0]
            res.render('usuario/del', { datos })
        }
    })
}

exports.usuarioDelete = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.render('error', { mensaje: 'USUARIO DELETE PARÁMETROS INCORRECTOS' })
    }
    const query = 'DELETE FROM usuario WHERE id=?'
    db.query(query, id, (error) => {
        if (error) {
            res.render('error', { mensaje: 'Imposible borrar el usuario' })
        } else {
            res.redirect('/admin/usuario')
        }
    })
}
