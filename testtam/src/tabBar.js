import React ,{Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Navigation} from 'react-native-navigation'
import magazine1 from './images/magazine1';
import cafe1 from './images/cafe1';
import world1 from './images/world1';



export default function(){

    Navigation.startTabBasedApp({
        tabs:[
            {
                label:'News',
                screen:'News',
                icon: require ('./images/magazine1.png'),
                title:'News'
    
            },
            {
                label:'Home',
                screen:'Home',
                icon: require ('./images/cafe1.png'),
                title:'Home'
    
            },
            {
                label:'World',
                screen:'World',
                icon: require ('./images/world1.png'),
                title:'World'
    
            },
    
    
        ]
    })

}
    
