import express from 'express';
import authControllers from '../controllers/authControllers';
import userControllers from '../controllers/userControllers';
import multer from 'multer';
import { verifyToken } from '../middleware/auth';
const upload = multer({ storage: multer.diskStorage({}) });
const router = express.Router();
// Auth Router
router.post('/api/auth/register', authControllers.register);
router.post('/api/auth/login', authControllers.login);
router.post('/api/auth/refreshToken', authControllers.refreshToken);
router.post('/api/auth/logout', verifyToken, authControllers.logout);
router.get('/api/auth/current-user', authControllers.getCurrentUser);
// User Router
router.delete(
	'/api/user/delete',
	upload.single('imageUrl'),
	userControllers.deleteUser
);
router.post(
	'/api/user/create',
	upload.single('imageUrl'),
	userControllers.createUser
);
router.post(
	'/api/user/update',
	upload.single('imageUrl'),
	userControllers.updateUser
);
router.get('/api/user/get-user', verifyToken, userControllers.getUser);
router.get('/api/user/getAll', userControllers.getAllUsers);
router.get('/api/user/userId', userControllers.getUserById);
module.exports = router;
