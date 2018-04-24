import {Navigation} from 'react-native-navigation';

import Home from './Home';
import News from './News';
import World from './World';
export const SCREENS = {
    Home,
    News,
    World
}

export default class Screens {
    static Init(){
        for(let name in SCREENS){
            Navigation.registerComponent(name, () => {return SCREENS[name]});
        }
    }
}
