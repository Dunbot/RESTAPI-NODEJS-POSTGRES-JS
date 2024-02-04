//Conectar a postgres
const {Pool} = require('pg'); //Pool conjunto de conexiones
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'clave',
    database: 'api'//,
    //port: 5432
});


//Definimos funciones en un archivo aparte

const getUsers = async (req,res) => {
    const response = await pool.query('select * from "usuarios";');
    res.status(200).json(response.rows);
}

const getUsersById = async(req,res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1;',[id]);
    res.json(response.rows);
}

const createUsers = async(req,res ) => {
    const {name, email} = req.body;
    const response = await pool.query('INSERT INTO usuarios (name,email) VALUES ($1,$2);',[name,email])
    console.log(response);
    res.json({
        message: 'Usuario agregado satisfactoriamente',
        body: {
            user: {name,email}
        }
    });
};

const updateUsersById = async(req,res) =>{
    const id = req.params.id;
    const {name,email} = req.body;
    const response = await pool.query('UPDATE usuarios SET name = $1, email = $2 WHERE id = $3',[name,email,id]);
    console.log(response);
    res.json('Usuario actualizado');
};

const deleteUsersById = async (req,res) =>{
    const id = req.params.id
    const response = await pool.query('DELETE FROM usuarios WHERE id = $1',[id]);
    console.log(response.rows);
    res.json(`Usuario con ${id} ha sido eliminado`);
};


module.exports = {
    getUsers, createUsers,getUsersById,deleteUsersById, updateUsersById
}