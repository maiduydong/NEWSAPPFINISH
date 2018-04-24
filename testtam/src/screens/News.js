
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class News extends Component {
  render() {
    return (
     <View style ={styles.container}>
       <Text> News</Text>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'blue'
  }

});