const db = require('../db')

exports.camisetas = (req, res) => {
    let query = "SELECT * FROM camiseta"

    db.query(query, (error, resultado) =>{
        if (error){
            res.render("error", {mensaje : "Imposible acceder a las camisetas"})
        } else {
            res.render("camiseta/list", {mensaje : "Imposible acceder a las camisetas"})
        }
    });
}


exports.camiseta = (req, res) => {
    const id = req.params;
    if(isNaN(id)){
        res.render('error',{mensaje:'Parámetros incorrectos'})
    }

    let query = "SELECT * FROM camiseta where id=?"

    db.query(query, id, (error, resultado) =>{
        if (error){
            res.render("error", {mensaje : "Imposible acceder a la camiseta"})
        } else {
            res.render("camiseta/list", {mensaje : "Imposible acceder a la camiseta"})
        }
    });
}
/*
router.get('/:id', camisetaController.camiseta)
router.get('/add', camisetaController.camisetaAddForm)
router.get('/add', camisetaController.camisetaAdd)
router.get('/edit/:id', camisetaController.camisetaUpdateForm)
router.get('/edit/:id', camisetaController.camisetaUpdate)
router.get('/del/:id', camisetaController.camisetaDelForm)
router.get('/del/:id', camisetaController.camisetaDel)
*/