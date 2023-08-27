import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';

export function useRegister() {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

  useEffect(() => {
    validateInput()
  }, [])

  const validateInput = (name, email, password, confirmPassword) => {
    if (email == "") {
      alert("Email is Empty")
      return false
    } else if (name == "") {
      alert("Name is Empty")
      return false
    } else if (password == "") {
      alert("Password is Empty")
      return false
    } else if (confirmPassword == "") {
      alert("Password is Empty")
      return false
    } else {
      return true
    }
  }

  const registerUser = async (name, email, password, confirmPassword) => {
    setLoading(true)
    let data = {
      name,
      email,
      password,
      password2: confirmPassword
    }
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
    registerUser 
  }
}