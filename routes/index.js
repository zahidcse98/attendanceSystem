const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('../routes/user');
const adminAttendanceRoute = require('../routes/adminAttendance');
const studentAttendanceRoute = require('../routes/studentAttendance');
const authenticate = require('../middleware/authenticate');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, userRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendanceRoute);
router.use('/api/v1/student/attendance', authenticate, studentAttendanceRoute);


module.exports = router;