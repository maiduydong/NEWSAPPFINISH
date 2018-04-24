import {Navigation} from 'react-native-navigation';
import TimerMixin from 'react-timer-mixin';






import Screens,{SCREENS} from './screens'

Screens.Init()



export default class App{
  constructor(){

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

}




