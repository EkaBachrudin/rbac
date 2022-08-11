import React, {useEffect} from 'react'
import Layouts from './Layouts'
import FormAddProduct from "../components/FormAddProduct"
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{   
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layouts>
        <FormAddProduct/>
    </Layouts>
  )
}

export default AddProduct