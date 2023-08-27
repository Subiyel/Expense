import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyButton, MyText, MyHeader, MyCard, MyTransaction } from '../../components';
import { useHome } from './useHome';
import { useIsFocused } from "@react-navigation/native";
import { styles } from "./styles";
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';
import "../../../assets/locales";

const Home = ({ navigation }) => {

  const isFocused = useIsFocused();
  const [email, setEmail] = useState("");
  const {t, i18n} = useTranslation();
  const { 
          data,
          name,
          error,
          isLoading, 
          isArabic,
        } = useHome()


useEffect(() => {
  if (isFocused) {
    if (isArabic) {
      i18n.changeLanguage('ar');
    } else {
      i18n.changeLanguage('en');
    }
  }
}, [isFocused]);

  
  console.log("isLoading: ", isLoading)
  console.log("data: ", data)

  const onSubmit = async () => {

  }

  



  return (
    <KeyboardAvoidingView keyboardVerticalOffset={Platform.select({ ios: 30, android: 50 })} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >

      <ScrollView>
        <View style={styles.container}>
         
          <MyHeader name={name} onSettingsPress={()=> navigation.navigate('SettingsModel')} />
          <MyCard />


          <View style={styles.row}>
            <MyText style={styles.transactionsLbl}>{ t('transactions') }</MyText>
            <TouchableOpacity>
              <MyText style={styles.viewAllLbl}>{ t('viewAll') }</MyText>
            </TouchableOpacity>
          </View>


          <MyTransaction 
            item={{
              "name": "Food",
              "amount": "$12.00",
              "time": "12 mins"
              }} 

            />

        </View>
      </ScrollView>


  </KeyboardAvoidingView>
  )
}

export default Home