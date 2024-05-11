import React, { useEffect } from "react";

import { getMe } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";import Layout from './Layout'
import Userlist from '../components/Userlist'
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError,user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if(user && user.role!=="admin"){
navigate("/dashboard")
    }
  }, [isError,user, navigate]);
  return (
    <div>
    <Layout>
    <Userlist/>
    
    </Layout>    
    </div>
  )
}

export default Users
