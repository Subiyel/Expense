import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';

export function useVerifyOTP() {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

  useEffect(() => {
    validateInput()
  }, [])

  const validateInput = (otp) => {
    if (otp == "") {
      alert("otp is Empty")
      return false
    }  else {
      return true
    }
  }

  const verifyUser = async (otp) => {
    setLoading(true)
    let data = { otp }
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