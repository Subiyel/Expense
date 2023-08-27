import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyButton, MyText } from '../../components';
import Icon from "react-native-vector-icons/Ionicons";
import { useLogin } from './useRegister';
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';
import { styles } from "./styles";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

      <ScrollView>
        <View style={styles.containerWrapper}>
          <View style={styles.box}>
      

          <View style={styles.row}>
          <Image source={ require('../../../assets/imgs/E1.png') } style={styles.logo} resizeMode={"contain"} />
          <MyText style={styles.title}>{ t('appName') }</MyText>
          </View>


          <MyText style={styles.loginLabel}>{t('register')}</MyText>


          <View style={styles.row1}>
              <View style={styles.fullView}>
                <TextInput
                  placeholderTextColor={colors.gray}
                  value={name}
                  placeholder={ t('name') }
                  onChangeText={(text) => setName(text)}
                  autoCapitalize="none"
                  style={[styles.tfInput, {textAlign :  I18nManager.isRTL ? 'right' : 'left'}]}
                />
                <Image style={ styles.iconAbsolute } source={ require('../../../assets/imgs/icons/email.png') } />
              </View>
            </View>
                 
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
                  <TouchableHighlight
                    onPress={() => setPassVisible(!passVisible)}
                    style={ styles.eyeIconRight}
                  >
                    <Icon
                      name={passVisible ? "eye-off" : "eye"}
                      size={18}
                      color={colors.white}
                    />
                  </TouchableHighlight>
                </View>


              </View>
            </View>


            <MyButton 
              labelStyle={{ fontSize: 18 }} 
              isLoading={isLoading} 
              buttonStyle={{ paddingVertical: 20, width: '40%',  borderRadius: 30, marginTop: 30, alignSelf: 'center' }} 
              onPress={()=> onSubmit()} 
              label={t('register')} 
              
              />

          
            <View style={styles.signupRow}>
              <MyText style={styles.newAccountLbl}>{ t('alreadyAccount') }</MyText>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
              <MyText style={styles.signUpLbl}>{ t('login') }</MyText>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>


  </KeyboardAvoidingView>
  )
}

export default Register