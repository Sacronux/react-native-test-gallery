import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  const {viewHeaderStyle, headerTextStyle} = styles;
  return (
    <View style={viewHeaderStyle}>
      <Text style={headerTextStyle}>TEST GALLERY</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewHeaderStyle: {
    height: 116,
    paddingTop: 60,
    paddingLeft: 25,
    backgroundColor: 'pink'
  },
  headerTextStyle: {
    color: '#fff',
    fontFamily: 'AvenirNext-Bold',
    fontSize: 28
  }
});

export default Header; 

