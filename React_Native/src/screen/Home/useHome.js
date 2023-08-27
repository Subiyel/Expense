import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';
import {useSelector, useDispatch} from 'react-redux'

export function useHome() {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const name = useSelector(state => state.appReducer.name)
    const isArabic = useSelector(state => state.appReducer.isArabic)


  useEffect(() => {
    // fetchHomeData()
  }, [])




  return { 
    data, 
    name,
    error,
    isArabic,
    isLoading, 
  }
}