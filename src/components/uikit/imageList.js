import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageCard from './imageCard';
import GALLERY_PHOTO from '../../routes';


const ImageList = ({data, navigation}) => {
  const {imageListStyle} = styles;
  const items = data.map(item => {
    return (
      <ImageCard 
        key={item.id} 
        sourceImg={item.urls.regular} 
        author={item.user.first_name}
        onPress={() => navigation.navigate('GALLERY_PHOTO', {urls: item.urls})} />
    )
  });
  return (
    <View style={imageListStyle}>
      {items}
    </View>  
  )
}

const styles = StyleSheet.create({

  imageListStyle: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

})

export default ImageList;
