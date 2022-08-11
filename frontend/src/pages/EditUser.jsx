import React, {useEffect} from 'react'
import Layouts from './Layouts'
import FormEditUser from '../components/FormEditUser'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError, user} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{   
    if(isError){
      navigate("/");
    }
    if(user && user.role !== "admin"){
      navigate("/dashboard");
    }
  }, [isError, user,  navigate]);

  return (
    <Layouts>
        <FormEditUser/>
    </Layouts>
  )
}

export default EditUser