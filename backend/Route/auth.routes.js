const express = require('express');
const router = express.Router();
const authController = require('../controller/auth/auth.controller')



router.post('/signup', authController.signUp );
router.post('/changepassword', authController.changePassword);
router.post('/login', authController.login ) ;
router.get('/jwt', authController.jwtValaditer );
router.get('/', authController.defaults );

module.exports = router;