import express from 'express';
import dotenv from 'dotenv';
import studentController from '../controller/studentController';
const router = express.Router();

dotenv.config();

router.post('*', studentController.createStudent);


export default router;