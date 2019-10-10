import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {w} from '../../../constants'

const ImageCard = ({sourceImg, author, onPress}) => {
  const {imageStyle, imageWrapper} = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={imageWrapper}>
        <Image style={imageStyle} source={{uri: sourceImg}}/>
        <Text>Author: {author}</Text>
      </View>
    </TouchableOpacity>
      
    
  )
}

const styles = StyleSheet.create({

  imageStyle: {
    width: (w / 2) - 4,
    height: (w / 2) - 4,
    borderRadius: 3,
    marginBottom: 5,
  },

  imageWrapper: {
    width: (w / 2) - 4,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    textAlign: 'center',
    marginBottom: 30,
    paddingBottom: 10,
    
  }

})

export default ImageCard; 