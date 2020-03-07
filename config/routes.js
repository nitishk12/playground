const express = require('express')
const usersControllers = require('../app/controllers/usersControllers')


const router = express.Router()

router.get('/users', usersControllers.list)
router.post('/users', usersControllers.create)
router.get('/users/:id', usersControllers.show)
router.put('/users/:id', usersControllers.update)
router.delete('/users/:id', usersControllers.destroy)


module.exports = router