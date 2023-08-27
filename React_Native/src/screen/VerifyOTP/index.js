import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyButton, MyText, MyBack } from '../../components';
import Icon from "react-native-vector-icons/Ionicons";
import { useVerifyOTP } from './useVerifyOTP';
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';
import { styles } from "./styles";

const VerifyOTP = ({ navigation }) => {
  
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  
  let inputRef1 = null;
  let inputRef2 = null;
  let inputRef3 = null;
  let inputRef4 = null;
  let inputRef5 = null;

  const {t, i18n} = useTranslation();
  const { 
          data, 
          error, 
          isLoading, 
          validateInput,
          verifyUser
        } = useVerifyOTP()


  useEffect(()=> {
  },[])

  const onOtpEnter = (text, index) => {

    switch (index){
      case 1:
        setOtp1(text)
        if (text != ''){
          inputRef2.focus()
        }
      break;

      case 2:
        setOtp2(text)
        if (text != ''){
          inputRef3.focus()
        }
      break;

      case 3:
        setOtp3(text)
        if (text != ''){
          inputRef4.focus()
        }
      break;

      case 4:
        if (text != ''){
          inputRef5.focus()
        }
        setOtp4(text)
      break;

      case 5:
        setOtp5(text)
      break;


    }
  }


  
  console.log("isLoading: ", isLoading)
  console.log("data: ", data)

  const onSubmit = async () => {
    alert(":)")
  }

  



  return (
    <KeyboardAvoidingView keyboardVerticalOffset={Platform.select({ ios: 30, android: 50 })} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >
    
      <ScrollView>
        <View style={styles.containerWrapper}>
        <MyBack {...navigation} />
          <View style={styles.box}>
      

          <View style={styles.row}>
          <Image source={ require('../../../assets/imgs/E1.png') } style={styles.logo} resizeMode={"contain"} />
          <MyText style={styles.title}>{ t('appName') }</MyText>
          </View>


          <MyText style={styles.loginLabel}>{t('verifyOtpTxt')}</MyText>


          
                 
          <View style={styles.row1}>
              <TextInput ref={(r) => inputRef1 = r} value={ otp1 } onChangeText={(text)=> onOtpEnter(text, 1) } style={ otp1 == '' ? styles.otp : styles.otpFilled } maxLength={1} keyboardType = 'numeric' autoFocus={true}/>
              <TextInput ref={(r) => inputRef2 = r} value={ otp2 } onChangeText={(text)=> onOtpEnter(text, 2) } style={ otp2 == '' ? styles.otp : styles.otpFilled } maxLength={1} keyboardType = 'numeric' onKeyPress={({ nativeEvent }) => {nativeEvent.key === 'Backspace' && otp2 == '' && inputRef1.focus() }} />
              <TextInput ref={(r) => inputRef3 = r} value={ otp3 } onChangeText={(text)=> onOtpEnter(text, 3) } style={ otp3 == '' ? styles.otp : styles.otpFilled } maxLength={1} keyboardType = 'numeric' onKeyPress={({ nativeEvent }) => {nativeEvent.key === 'Backspace' && otp3 == '' && inputRef2.focus() }} />
              <TextInput ref={(r) => inputRef4 = r} value={ otp4 } onChangeText={(text)=> onOtpEnter(text, 4) } style={ otp4 == '' ? styles.otp : styles.otpFilled } maxLength={1} keyboardType = 'numeric' onKeyPress={({ nativeEvent }) => {nativeEvent.key === 'Backspace' && otp4 == '' && inputRef3.focus() }} />
              <TextInput ref={(r) => inputRef5 = r} value={ otp5 } onChangeText={(text)=> onOtpEnter(text, 5) } style={ otp4 == '' ? styles.otp : styles.otpFilled } maxLength={1} keyboardType = 'numeric' onKeyPress={({ nativeEvent }) => {nativeEvent.key === 'Backspace' && otp5 == '' && inputRef4.focus() }} />
          </View>


            <MyButton 
              labelStyle={{ fontSize: 18 }} 
              isLoading={isLoading} 
              buttonStyle={{ paddingVertical: 20, width: '40%',  borderRadius: 30, marginTop: 50, alignSelf: 'center' }} 
              onPress={()=> onSubmit()} 
              label={t('verify')} 
              
              />


          </View>
        </View>
      </ScrollView>


  </KeyboardAvoidingView>
  )
}

export default VerifyOTP