import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';
import Toast from 'react-native-toast-message';

export function useRegister({navigation}) {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const showToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Registration Successfull'
      });
    }
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
      if (response._id){
        showToast()
        navigation.goBack()
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