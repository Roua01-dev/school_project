import express from "express";
import{
    getUsers,
    createUser,
    deleteUser,
    getUserById,
    updateUser
}from '../controlers/Users.js'
 import {verifyUser,adminOnly} from "../middleware/AuthUser.js";

const router=express.Router();
router.get('/users',verifyUser,adminOnly,getUsers);
router.get('/users/:id',verifyUser,adminOnly,getUserById);
router.post('/users',verifyUser,adminOnly,createUser);
router.patch('/user/:id',verifyUser,adminOnly,updateUser);
router.delete('/users/:id',verifyUser,adminOnly,deleteUser);
export default router;


