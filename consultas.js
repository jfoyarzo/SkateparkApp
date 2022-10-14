const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "pass",
    database: "skatepark",
    port: 5433,
})

const insertarUsuario = async (usuario) => {

    const result = await pool.query(`INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) values ('${usuario.email}', '${usuario.nombre}', '${usuario.password}', '${usuario.experiencia}', '${usuario.especialidad}', '${usuario.foto}', '${usuario.estado}' ) RETURNING * `)

    return result.rows
}

const getUsuarios = async () => {
    const result = await pool.query('SELECT * from skaters')
    return result.rows
}

const getUser = async (email, password) => {

    const result = await pool.query(`SELECT * from skaters WHERE email='${email}' AND password='${password}'`)

    return result.rows[0]
}

const editUser = async (nuevoUser, id) => {

    const result = await pool.query(`UPDATE skaters set nombre='${nuevoUser.nombre}', password='${nuevoUser.password}', anos_experiencia='${nuevoUser.experiencia}', especialidad='${nuevoUser.especialidad}' WHERE id='${id}' RETURNING *`)
    return result.rows
}

const editEstado = async (id, estado) => {
    const result = await pool.query(`UPDATE skaters SET estado='${estado}' WHERE id='${id}' RETURNING *`)
    return result.rows[0]
}

const eliminarUser = async (id) => {
    const result = await pool.query(`DELETE FROM skaters WHERE id='${id}'`)
    return result.rowCount
}

module.exports = { insertarUsuario, getUsuarios, getUser, editUser, editEstado, eliminarUser }