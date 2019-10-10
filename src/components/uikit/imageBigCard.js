import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {h, w} from '../../../constants';

const ImageBigCard = ({data}) => {
  const {imageStyle} = styles;
  return (
    <View>
      <Image style={imageStyle} source={{uri: data.regular}}/>
    </View>    
  )
}

const styles = StyleSheet.create({

  imageStyle: {
    width: w,
    height: h
  }

})

export default ImageBigCard; 