const express = require('express')
const expressFileUpload = require('express-fileupload')
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser")
const { engine } = require("express-handlebars")
const { insertarUsuario, getUsuarios, getUser, editUser, editEstado, eliminarUser } = require('./consultas')

const app = express()
const clave = 'superSecreto'

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000")
})

app.use('/bootstrap', express.static(__dirname +
    '/node_modules/bootstrap/dist/css'))

app.use('/jquery', express.static(__dirname +
    '/node_modules/jquery/dist'))

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    expressFileUpload({
        limits: { fileSize: 5000000 },
        abortOnLimit: true,
        responseOnLimit:
            "El peso de la imagen que intentas subir supera el limite permitido de 5 MB",
    })
)

app.set("view engine", "handlebars")

app.engine(
    "handlebars",
    engine({
        defaultLayout: 'main',
        layoutsDir: __dirname + "/views/mainLayout",
    })
)

app.get('/', async (req, res) => {
    try {
        const usuarios = await getUsuarios()
        res.render('index', { usuarios })
    }
    catch (err) {
        res.status(500).send({
            error: `Error! ${err.message}`,
            code: 500
        })

    }
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/registro', (req, res) => {
    res.render('registro')
})

app.get('/editar', (req, res) => {
    let token = req.query.token
    jwt.verify(token, clave, (err, decoded) => {
        const data = decoded
        err ?
            res.status(401).send({
                error: "401 Unauthorized",
                message: "Usuario no autorizado",
                token_error: err.message
            })
            : res.render("editar", { data })
    })
})

app.get('/admin', async (req, res) => {
    try {
        const usuarios = await getUsuarios()
        res.render('admin', { usuarios })
    }
    catch (err) {
        res.status(500).send({
            error: `Error! ${err.message}`,
            code: 500
        })

    }

})

app.post('/usuario', async (req, res) => {

    const { email, nombre, password, experiencia, especialidad } = req.body
    const nombreFoto = nombre.replace(/ /g, '_')
    const { foto } = req.files
    const usuario = {
        email,
        nombre,
        password,
        experiencia,
        especialidad,
        foto: `${nombreFoto}.jpg`,
        estado: false
    }

    try {
        foto.mv(`${__dirname}/public/img/${usuario.foto}`, (err) => {
            if (err) res.send("Error!, no se pudo cargar el archivo")
        })
        const response = await insertarUsuario(usuario)
        res.status(201).redirect('/')

    }
    catch (err) {
        res.status(500).send({
            error: `Error! ${err.message}`,
            code: 500
        })

    }
})

app.post('/verificar', async (req, res) => {
    const { email, password } = req.body
    const user = await getUser(email, password)
    if (user) {
        const token = jwt.sign(user, clave)
        res.send(token)
    }
    else {
        res.status(404).send({
            error: "Usuario no encontrado",
            code: 404
        })
    }
})

app.put('/usuario', async (req, res) => {
    const { id, nombre, password, experiencia, especialidad } = req.body
    const nuevoUser = {
        nombre,
        password,
        experiencia,
        especialidad
    }
    try {
        const response = await editUser(nuevoUser, id)
        res.status(201).send(response)
    }
    catch (err) {
        res.status(500).send({
            error: `Error! ${err.message}`,
            code: 500
        })
    }
})

app.put('/estado', async (req, res) => {
    const { id, estado } = req.body
    try {
        const response = await editEstado(id, estado)
        res.status(201).send(response)
    }
    catch (err) {
        res.status(500).send({
            error: `Error! ${err.message}`,
            code: 500
        })
    }
})

app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await eliminarUser(id)
        response > 0 ? res.status(200).send('Usuario eliminado') : res.send('Usuario no encontrado')
    }
    catch (err) {
        res.status(500).send({
            error: `Error! ${err.message}`,
            code: 500
        })
    }
})



