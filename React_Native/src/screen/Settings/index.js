import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, I18nManager, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyButton, MyText, MyHeader, MyCard, MyTransaction } from '../../components';
import { useSettings } from './useSettings';
import { styles } from "./styles";
import { colors } from '../../util/colors';
import {useTranslation} from 'react-i18next';
import { Switch } from 'react-native-switch';


const Settings = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const {t, i18n} = useTranslation();
  const { 
          data,
          name,
          error,
          isArabic,
          isLoading, 
          changeLanguage,
        } = useSettings()


  useEffect(()=> {
  },[])



  const onLanguageChange = async () => {
    changeLanguage()
    navigation.goBack()
  }

  



  return (
    <ScrollView style={styles.container}>
        <View style={styles.containerWrapper}>


            <MyText style={styles.title}>Settings</MyText>

            <View style={styles.row}>
              <MyText>Language</MyText>
                  <Switch
                      value={isArabic}
                      onValueChange={(val) => onLanguageChange()}
                      activeText={'ع'}
                      inActiveText={'En'}
                      circleSize={30}
                      circleBorderWidth={3}
                      // backgroundActive={'green'}
                      backgroundInactive={colors.green}
                      // circleActiveColor={'#30a566'}
                      // circleInActiveColor={'#000000'}
                    />
            </View>

        </View>
    </ScrollView>
  )
}

export default Settings