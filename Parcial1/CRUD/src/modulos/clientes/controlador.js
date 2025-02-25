const db = require('../../DB/mysql')

const TABLA = 'clientesmx';
function todos(){
    return db.todos(TABLA);
}

function uno(id){
    return db.uno(TABLA, id);
}

function eliminar(id){
    return db.eliminar(TABLA, id);
}

module.exports = {
    todos,
    uno,
    eliminar,
};