import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyButton, MyText } from '../../components';
import { useHome } from './useHome';
import { styles } from "./styles";
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';
import Icon from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const {t, i18n} = useTranslation();
  const { 
          data, 
          error, 
          isLoading, 
          validateInput,
        } = useHome()


  useEffect(()=> {
  },[])

  
  console.log("isLoading: ", isLoading)
  console.log("data: ", data)

  const onSubmit = async () => {

  }

  



  return (
    <KeyboardAvoidingView keyboardVerticalOffset={Platform.select({ ios: 30, android: 50 })} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >

    {/* <LinearGradient colors={['#65ad82', '#579e93', '#4283ab']} style={styles.linearGradient}> */}
      <ScrollView>
        <View style={styles.container}>
         
        </View>
      </ScrollView>


    {/* </LinearGradient> */}
  </KeyboardAvoidingView>
  )
}

export default Home