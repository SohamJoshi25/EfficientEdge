const express = require('express');
const router = express.Router();
const userController = require('../controller/user/user.controller')


router.get('/',userController.defaults);
router.get('/:id',userController.getOne);
router.delete('/',userController.deleteOne)
router.patch('/',userController.changeName)

module.exports = router;