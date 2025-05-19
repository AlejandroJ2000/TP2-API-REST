const express = require('express')
const router = express.Router()
const {
    getUsers,
    postUser,
    patchUser
} = require('../controllers/user.controller')

router.get('/', getUsers)
router.post('/', postUser)
router.patch('/:id', patchUser)

module.exports = router