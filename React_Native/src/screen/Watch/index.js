import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { MyHeader, MovieItem } from '../../components';
import Api from '../../services/Api';
import { ApiConstants } from '../../services/ApiConstants';
import { useWatch } from './useWatch';
import { styles } from './styles';

const Watch = ({ navigation }) => {


  const { data, error, isLoading } = useWatch()
  console.log("isLoading: ", isLoading)
  console.log("data: ", data)


  const renderItem = ({ item }) => {
    // console.log("Item: ", item)
    return (
    <MovieItem 
      title={item.title} 
      imageUrl={ ApiConstants.IMG_URL + item.backdrop_path} 
      item={item}
      onPress={(item)=> navigation.navigate('Detail', {movie: item})}
    />
  );
}


  return (
    <SafeAreaView style={styles.safeArea}>
      <MyHeader onPress={()=> navigation.navigate('SearchModel')} />

      <View style={styles.container}>
          { isLoading && 
            <Text>Loading...</Text>
          }

          <View style={styles.wrapper}>
            <FlatList
              data={data}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              contentContainerStyle={{ paddingBottom: 30 }}
            />
          </View>


      </View>


    </SafeAreaView>
  )
}

export default Watch