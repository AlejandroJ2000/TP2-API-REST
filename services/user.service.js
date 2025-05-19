const fs = require('fs')
const path = require('path')
const { usuarios } = require('../models/user.model')

function saveUsersInFile() {
    const ruta = path.join(__dirname,'..', 'usuarios.json')
    fs.writeFileSync(ruta, JSON.stringify(usuarios, null, 2), 'utf-8')
}

async function obtainUsers() {
    return usuarios
}

async function addUser(newUser) {
    const newId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1
    const userWithId = { id: newId, ...newUser }
    usuarios.push(userWithId)
    saveUsersInFile()
    return userWithId
}

async function modifyUser(id, newData) {
    const index = usuarios.findIndex(u => u.id === id)
    if(index === -1) {
        throw new Error("Usuario no encontrado")
    }
    usuarios[index] = { ...usuarios[index], ...newData}
    saveUsersInFile()
    return usuarios[index]
}

module.exports = { obtainUsers, addUser, modifyUser }