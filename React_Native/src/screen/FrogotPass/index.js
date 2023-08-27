import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyButton, MyText, MyBack } from '../../components';
import Icon from "react-native-vector-icons/Ionicons";
import { useForgotPass } from './useForgotPass';
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';
import { styles } from "./styles";

const ForgotPass = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {t, i18n} = useTranslation();
  const { 
          data, 
          error, 
          isLoading, 
          validateInput,
          verifyUser
        } = useForgotPass()


  useEffect(()=> {
  },[])

  
  console.log("isLoading: ", isLoading)
  console.log("data: ", data)

  const onSubmit = async () => {
    if (validateInput(email)){
      // await verifyUser(email)
      navigation.navigate('VerifyOTP')
    }
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


          <MyText style={styles.loginLabel}>{t('forgotTxt')}</MyText>


          
                 
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


            <MyButton 
              labelStyle={{ fontSize: 18 }} 
              isLoading={isLoading} 
              buttonStyle={{ paddingVertical: 20, width: '40%',  borderRadius: 30, marginTop: 30, alignSelf: 'center' }} 
              onPress={()=> onSubmit()} 
              label={t('verify')} 
              
              />


          </View>
        </View>
      </ScrollView>


  </KeyboardAvoidingView>
  )
}

export default ForgotPass