import { useState, useEffect } from 'react';
import { I18nManager } from 'react-native';
import useApi from '../../services/useApi';
import { ApiConstants } from '../../services/ApiConstants';
import {useSelector, useDispatch} from 'react-redux'
import RNRestart from "react-native-restart";
import * as types from "../../store/actions/types";
import Toast from 'react-native-toast-message';

export function useSettings() {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const isArabic = useSelector(state => state.appReducer.isArabic)

    const dispatch = useDispatch()
    const showToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Language updated, Restarting..'
      });
    }

  useEffect(() => {

  }, [])


  const changeLanguage = async () => {
    showToast()

    
      if (isArabic) {
        if (I18nManager.isRTL) {
                    // i18n.changeLanguage('ar');
                    await I18nManager.forceRTL(false);
              }
        } else {
              if (!I18nManager.isRTL) {
                    // i18n.changeLanguage('en');
                    await I18nManager.forceRTL(true);
              }
        }

      dispatch({ type: types.SET_ARABIC, data: !isArabic })

      
      setTimeout(() => {
        RNRestart.Restart();
      }, 1500);
      
  }


  return { 
    data, 
    error,
    isLoading, 
    isArabic,
    changeLanguage,
  }
}