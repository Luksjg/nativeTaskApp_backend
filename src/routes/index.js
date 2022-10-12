const {Router} = require("express")
const {getTask,getTasks,saveTask,updateTask,deleteTask} = require("../controllers/index")
const router = Router()  

router.get("/tasks", getTasks);


router.post("/tasks", saveTask);

router.get("/tasks/:id", getTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

module.exports = router
