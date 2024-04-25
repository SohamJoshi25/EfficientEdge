const express = require('express');
const router = express.Router();
const taskController = require('../controller/task/task.controller')

router.get('/',taskController.defaults);
router.get('/todo/:id',taskController.getTodoTasks)
router.get('/:id',taskController.getID);
router.post('/',taskController.addTask);
router.patch('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);

module.exports = router;