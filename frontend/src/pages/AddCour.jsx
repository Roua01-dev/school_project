import React, { useEffect } from "react"

import Layout from './Layout'
import FormAddCour from '../components/FormAddCour'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddCour = () => {
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
    <FormAddCour/>
 </Layout>
    </div>
  )
}

export default AddCour
