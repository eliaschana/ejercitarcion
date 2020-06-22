const {pool} = require('../config/config');

const getUsuarios = async () => {
    const usuarios = await pool.query('SELECT * FROM USUARIO');
    return usuarios.rows;
};


const getUsuario = async (id) => {
    const query = {
        text: 'SELECT * FROM USUARIO WHERE ID = $1',
        values: [id]
      }
    const usuarios = await pool.query(query);
    return usuarios.rows[0];
};


const removeUsuario = async (id) => {
    const query = {
        text: 'DELETE FROM USUARIO WHERE ID = $1',
        values: [id]
      }
    const removeRow = await pool.query(query);
    return removeRow.rowCount;
};
 
const removeUsuarios = async () => {
    const query = {
        text: 'DELETE FROM USUARIO',
        values: [id]
      }
    const removeRow = await pool.query(query);
    return removeRow.rowCount;
};
 

const addUsuario = async (usuario) => {
    const query = {
        text: 'INSERT INTO USUARIO (nombre, apellido, edad, tiene_registro ) VALUES ($1, $2, $3, $4)',
        values: [usuario.nombre, usuario.apellido, usuario.edad, usuario.tieneRegistro]
      }
    const   addRow = await pool.query(query);
    return   addRow.rowCount;
}

const updateUsuario = async (usuario,id) => {
  const query = {
      text: 'UPDATE USUARIO SET nombre=$1, apellido=$2, edad=$3, tiene_registro=$4 WHERE id=$5',
       values :[usuario.nombre, usuario.apellido, usuario.edad, usuario.tieneRegistro,id]
    }
  const   addRow = await pool.query(query);
  return   addRow.rowCount;
}




module.exports =  { getUsuarios, addUsuario, getUsuario, removeUsuario, removeUsuarios,updateUsuario};