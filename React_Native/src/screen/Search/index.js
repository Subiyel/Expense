import React, { useEffect, useState } from 'react'
import { View, TextInput, SafeAreaView, FlatList, Image } from 'react-native';
import { MyHeader, MovieItem, MyText } from '../../components';
import Api from '../../services/Api';
import { ApiConstants } from '../../services/ApiConstants';
import { useSearch } from './useSearch';
import {styles} from './styles';


const Search = ({ navigation }) => {


  const { data, error, isLoading } = useSearch()
  const [ searchTI, setSearch] = useState('')



  const renderItem = ({ item }) => {
    // console.log("Item: ", item)
    return (
    <MovieItem 
      title={item.title}
      onPress={(item)=> { navigation.popToTop(); navigation.navigate('Detail', {movie: item})}}
      imageUrl={ ApiConstants.IMG_URL + item.backdrop_path}  
      item={item} 
      cardStyle={{ width: '47%', height: 100 }} 
      imgStyle={{ height: 100 }} 
    />
  );
}


  return (
    <SafeAreaView style={styles.safeArea}>

      <View>
        <TextInput value={searchTI} placeholder='TV shows, movies and more' style={styles.searchTextInput} />
        <Image style={styles.searchIcon} source={ require('../../../assets/imgs/icons/Search.png') } />
      </View>

      <View style={styles.wrapper}>
            <FlatList
              data={data}
              renderItem={renderItem}
              numColumns={2}
              key={2}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{ paddingBottom: 30 }}
            />
      </View>


    </SafeAreaView>
  )
}

export default Search