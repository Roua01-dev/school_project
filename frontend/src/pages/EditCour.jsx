import Layout from './Layout'
import FormEditCour from '../components/FormEditCour'
import React, { useEffect } from "react";

import { getMe } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const EditCour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (

    <div>
        <Layout>
    <FormEditCour/>
        </Layout>
        
      
    </div>
  )
}

export default EditCour
