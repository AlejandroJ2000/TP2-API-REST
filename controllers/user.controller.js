const {
    obtainUsers,
    addUser,
    modifyUser
} = require('../services/user.service')

async function getUsers(req, res) {
    const users = await obtainUsers()
    res.json(users)
}

async function postUser(req, res) {
    const nuevo = req.body
    if (!nuevo.nombre || !nuevo.email) {
        return res.status(400).json({ error: "Faltan campos obligatorios" })
    }
    const user = await addUser(nuevo)
    res.status(201).json(user)
}

async function patchUser(req, res) {
    const id = parseInt(req.params.id)
    const newData = req.body

    try {
        const userModify = await modifyUser(id, newData)
        res.json(userModify)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = { getUsers, postUser, patchUser }