const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors")
const morgan = require("morgan")

app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan())

app.use(require("./routes/index"))

app.listen(3000)
console.log("listening on port 3000")
 