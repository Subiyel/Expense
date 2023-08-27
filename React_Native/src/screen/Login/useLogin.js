import { useState, useEffect } from 'react';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';
import * as types from "../../store/actions/types";
import {useSelector, useDispatch} from 'react-redux'
import jwt_decode from "jwt-decode";
import Toast from 'react-native-toast-message';

export function useLogin({navigation}) {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const isArabic = useSelector(state => state.appReducer.isArabic)

    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const showToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Login Success'
      });
    }

  useEffect(() => {
    validateInput()
  }, [])

  const validateInput = (email, password) => {
    if (email == "") {
      alert("Email is Empty")
      return false
    } else if (password == "") {
      alert("Password is Empty")
      return false
    } else {
      return true
    }
  }

  const loginUser = async (email, password) => {
    setLoading(true)
    let data = {
      email,
      password
    }
    let response = await useApi(ApiConstants.BASE_URL + ApiConstants.LOGIN, data, "POST")
    setLoading(false)
    if (response){
    if (response.success) {

      var decoded = jwt_decode(response.token);
      // console.log(decoded);

        let data = {
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
          token: response.token,
          refreshToken: response.refresh_token
        }
        showToast()
        dispatch({ type: types.LOGIN, data });
        navigation.navigate("BottomTabs")
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
    loginUser,
    isArabic
  }
}