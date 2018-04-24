
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

export default class Home extends Component {
  
  render() {
    
    return (
      <View style = {styles.container}>
          return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((x) => {
    console.log(x.title)
  });
     </View>
    );
  }


 }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-end'

  },
  buttonContainer:{
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-end'
  },

  text:{
    fontSize: 40,
    color: 'white'
  }
  
})