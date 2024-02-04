//diferente al otro index.js
//Router es el que nos permitira definir rutas
const {Router} = require('express');
const router = Router();

const {getUsers, createUsers,getUsersById, deleteUsersById, updateUsersById} = require('../controllers/index.controllers')

router.get('/users', getUsers );
router.get('/users/:id',getUsersById);
router.post('/users',createUsers) //post es para guardar datos, no importa nombre
router.delete('/users/:id',deleteUsersById)
router.put('/users/:id',updateUsersById)
module.exports = router;