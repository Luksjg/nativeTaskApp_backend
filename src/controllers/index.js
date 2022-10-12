const {Pool} = require("pg")
require('dotenv').config()

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT//port default de postgress
})

const getTasks = async (req, res) => {
    const results = await pool.query("select * from tasks");
    res.send(results.rows)
};
  
const saveTask = async (req, res) => {
    const {title,description} = req.body
    pool.query(`INSERT INTO tasks (title,description) VALUES ($1,$2)`,[title,description])
    res.send("results")
};
  
const getTask = async (req, res) => {
    const id = req.params.id
    const result = await pool.query("SELECT * FROM tasks WHERE id IN ($1)",[id])
    res.send(result.rows[0])
};
  
const deleteTask = async (req, res) => {
    const id = req.params.id
    const result = await pool.query("DELETE FROM tasks WHERE id = ($1)",[id])
    res.send(result.rows)
};
  
const updateTask = async (req, res) => {
    const {title,description,complete} = req.body
    const id = req.params.id
    console.log(title,description,id)
    await pool.query("UPDATE tasks SET title = $1, description = $2, complete=$3 WHERE id = $4",[title,description,complete, id])
    res.send("bien")
};
  

module.exports = {
    getTask,
    saveTask,
    updateTask,
    deleteTask,
    getTasks
}