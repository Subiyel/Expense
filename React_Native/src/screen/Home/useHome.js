import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';

export function useHome() {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

  useEffect(() => {
    fetchHomeData()
  }, [])



  const fetchHomeData = async (email, password) => {
    setLoading(true)
    let data = {
      email,
      password
    }
    let response = await useApi(ApiConstants.BASE_URL + ApiConstants.LOGIN, data, "POST")
    setLoading(false)
    if (response && response.success) {
        setData(response.data)
        console.log("jwt: ", response.token)
    } else if (response.auth) {
      alert(response.auth)
    } else if (response.error) {
      alert(response.error)
    } else {
      alert("Could not connect to server")
    }
  }

  return { 
    data, 
    error, 
    isLoading, 
  }
}