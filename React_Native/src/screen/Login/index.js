import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { MyButton, MyText } from '../../components';
import { useLogin } from './useLogin';
import { styles } from "./styles";
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const {t, i18n} = useTranslation();
  const { 
          data, 
          error, 
          isLoading, 
          validateInput,
          loginUser
        } = useLogin(email, password)


  useEffect(()=> {
  },[])

  
  console.log("isLoading: ", isLoading)
  console.log("data: ", data)

  const onSubmit = async () => {
    if (validateInput(email, password)){
      await loginUser(email, password)
    }
  }

  



  return (
    <KeyboardAvoidingView keyboardVerticalOffset={Platform.select({ ios: 30, android: 50 })} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >

    {/* <LinearGradient colors={['#65ad82', '#579e93', '#4283ab']} style={styles.linearGradient}> */}
      <ScrollView>
        <View style={styles.containerWrapper}>
          <View style={styles.box}>
      


          <Image source={ require('../../../assets/imgs/E1.png') } style={styles.logo} resizeMode={"contain"} />
          <MyText style={styles.title}>{ t('appName') }</MyText>
          <MyText style={styles.loginLabel}>{t('login')}</MyText>
                 
            <View style={styles.row1}>
              <View style={styles.fullView}>
                <TextInput
                  placeholderTextColor={colors.gray}
                  value={email}
                  placeholder={ t('email') }
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize="none"
                  style={[styles.tfInput, {textAlign :  I18nManager.isRTL ? 'right' : 'left'}]}
                />
                <Image style={ styles.iconAbsolute } source={ require('../../../assets/imgs/icons/email.png') } />
              </View>
            </View>

            <View style={styles.row1}>
              <View style={styles.fullView}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    placeholderTextColor={colors.gray}
                    value={password}
                    secureTextEntry={!passVisible}
                    placeholder={ t('password') }
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                    style={[styles.tfInput, {textAlign :  I18nManager.isRTL ? 'right' : 'left'}]}
                  />
                  <Image style={ styles.iconAbsolute } source={ require('../../../assets/imgs/icons/pass.png') } />
                  {/* <TouchableHighlight
                    onPress={() => revealPassword()}
                    style={ styles.eyeIconRight}
                  >
                    <Icon
                      name={passVisible ? "eye-off" : "eye"}
                      size={18}
                      color={colors.gray}
                    />
                  </TouchableHighlight> */}
                </View>

                <TouchableOpacity style={styles.forgotPassView}>
                  <MyText>{ t('forgotPassword') }</MyText>
                </TouchableOpacity>
              </View>
            </View>


            <MyButton 
              labelStyle={{ fontSize: 18 }} 
              isLoading={isLoading} 
              buttonStyle={{ paddingVertical: 20, width: '40%',  borderRadius: 30, marginTop: 30, alignSelf: 'center' }} 
              onPress={()=> onSubmit()} 
              label={t('login')} 
              
              />

          
            <View style={styles.signupRow}>
              <MyText style={styles.newAccountLbl}>Don’t have an account?</MyText>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
              <MyText style={styles.signUpLbl}>Sign Up</MyText>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>


    {/* </LinearGradient> */}
  </KeyboardAvoidingView>
  )
}

export default Login