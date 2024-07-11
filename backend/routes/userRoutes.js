const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/check-username', userController.checkUsernameAvailability);

// 테스트 라우트 추가
router.get('/test', (req, res) => {
  res.send('API is working!');
});

module.exports = router;
