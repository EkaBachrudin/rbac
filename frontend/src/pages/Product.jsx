import React, {useEffect} from 'react'
import Layouts from './Layouts'
import ProductList from '../components/ProductList'
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

export const Products = () => {
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
        <ProductList/>
    </Layouts>
  )
}

export default Products
