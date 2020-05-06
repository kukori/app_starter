const express = require('express');
const { register, login, logout, getCurrent, forgotPassword, resetPassword, updateUserDetails, updateUserPassword } = require('../controllers/auth');
const router = express.Router({ mergeParams: true });
const { protect } = require('../middlewares/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resettoken').put(resetPassword);
router.route('/updatedetails').put(protect, updateUserDetails);
router.route('/updatepassword').put(protect, updateUserPassword);
router.route('/current').get(protect, getCurrent);

module.exports = router;
