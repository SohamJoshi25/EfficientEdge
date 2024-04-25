const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo/todo.controller')


router.get('/',todoController.defaults)
router.get('/user/',todoController.getTodoUser)
router.get('/:id',todoController.getID)
router.post('/',todoController.createTodo)
router.delete('/:id',todoController.deleteTodo)
router.patch('/:id',todoController.updateTodo)

module.exports = router; 