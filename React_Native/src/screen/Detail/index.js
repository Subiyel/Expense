import React, { useEffect, useState } from 'react'
import { View, TextInput, SafeAreaView, FlatList, ImageBackground, Alert, ScrollView } from 'react-native';
import { MyImage, MyBack, MyText, MyButton } from '../../components';
import {styles} from './styles';
import { ApiConstants } from '../../services/ApiConstants';
import LinearGradient from 'react-native-linear-gradient';

const Detail = ({ route, navigation }) => {

console.log("route: ", route)
  const movie = route.params.movie;

  return (

    <ScrollView>
    <ImageBackground 
      source={{ uri: ApiConstants.IMG_URL + movie.backdrop_path }} 
      style={styles.imgStyle} 
      resizeMode={'stretch'} 
    >
      <LinearGradient 
        colors={['#00000000', '#00000050', '#000000']} 
        style={{height : '100%', width : '100%'}}>

      <MyBack goBack={()=> navigation.goBack()} />
      <View style={styles.overlayText}>
        <MyText style={styles.imgTitle}>{movie.title}</MyText>
        <MyButton buttonStyle={styles.ticketsBtn} label="Get Tickets" onPress={()=> alert('')} />
        <MyButton buttonStyle={styles.tailerBtn} label="Watch Trailer" onPress={()=> alert('')} />
      </View>
      
      </LinearGradient>
    </ImageBackground>


    <View style={styles.wrapper}>
    <MyText style={styles.overviewTxt}>Overview</MyText>
    <MyText style={styles.descTxt}>{movie.overview}</MyText>
    </View>

    </ScrollView>

  )
}

export default Detail