import express from "express";
import{
   getCours,
   getCourById,
   createCour,
   updateCour,
   deleteCour
}from '../controlers/Cours.js';
import {verifyUser}from '../middleware/AuthUser.js'

const router=express.Router();
router.get('/cour',verifyUser,getCours);
router.get('/cour/:id',verifyUser,getCourById);
router.post('/cour',verifyUser,createCour);
router.patch('/cour/:id',verifyUser,updateCour);
router.delete('/cour/:id',verifyUser,deleteCour);
export default router;


