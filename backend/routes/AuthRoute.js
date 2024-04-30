import express from "express";
import{
  Login,
  Logout,
  Me

}from '../controlers/Auth.js'

const router=express.Router();
router.get('/me',Me);
router.post('/login',Login);
router.delete('/logout',Logout);

export default router;


