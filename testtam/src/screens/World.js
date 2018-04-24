
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class World extends Component {
  render() {
    return (
     <View style={styles.container}>
       <Text> World</Text>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'gray'
  }
})