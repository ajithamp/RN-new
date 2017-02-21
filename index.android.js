/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import Additem from './ages/additem';
import List from './ages/list';
import Calculate from './ages/calculate';


export default class leather extends Component {
  render() {
    return (
          <Navigator initialRoute={{ index: 0 }} 
          renderScene={(route, navigator) => this.renderScene(route,navigator)} 
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
           />
    );
  }
  renderScene(route,navigator){
  	if(route.index == 0){
  		  		return <List navigator={navigator} />
  	}
  	else if(route.index == 1){
  		  		return <Additem navigator={navigator} />
  	}
   	else if(route.index == 2){
  		return <Calculate navigator={navigator} />
  	}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('leather', () => leather);
