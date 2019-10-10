import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ImageBigCard} from '../uikit';

export default class PhotoScreen extends Component {
  
  render() {
    const {urls} = this.props.navigation.state.params;
    const {navigation} = this.props;
    const {leftButtonStyle} = style;
    
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={leftButtonStyle} name={'md-arrow-back'} color={'pink'}/>
        </TouchableOpacity>
        
        <ImageBigCard data={urls}/>
        
      </View>
    )
  }
}

const style = StyleSheet.create({
  imageStyle: {
    flex: 1
  },
  leftButtonStyle: {
    paddingTop: 25,
    paddingLeft: 25,
    fontSize: 35
  }
})