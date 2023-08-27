import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';

export function useForgotPass() {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

  useEffect(() => {
    validateInput()
  }, [])

  const validateInput = (email) => {
    if (email == "") {
      alert("Email is Empty")
      return false
    }  else {
      return true
    }
  }

  const verifyUser = async (email) => {
    setLoading(true)
    let data = { email }
    let response = await useApi(ApiConstants.BASE_URL + ApiConstants.REGISTER, data, "POST")
    setLoading(false)
    if (response) {
      if (response.success){
        // setData(response.)
        // console.log("jwt: ", response.token)
      } else if (response.auth) {
        alert(response.auth)
      } else if (response.error) {
        alert(response.error)
      }
    } else {
      alert("Could not connect to server")
    }
  }

  return { 
    data, 
    error, 
    isLoading, 
    validateInput, 
    verifyUser 
  }
}