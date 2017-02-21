
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
  View,
  Picker,
  ListView,
  TouchableHighlight
} from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import { Container,Header,Icon,Button,Footer} from 'native-base';
import realm from './realm.js';


export default class Calculate extends Component {
	constructor(props,context){
		super(props,context);
		this.state={
              total:"",
          todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})

    		}
    this.items = [];
  }
  componentDidMount(){
     this.items = realm.objects('Item');
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });

			let result = [];
		    this.items.map(a => {let val=a.price;result.push(val)});
            var total =  0;
            for(var i=0;i<result.length;i++)
              {                  

                  total += Number(result[i]);
               }
               this.setState({total:total})
	}

   renderRow(rowData) {
  return (
      <View>
        <View style={styles.row}>
          <Text style={styles.todoText}>{rowData.item}</Text>
          <Text>{rowData.price}</Text>
        </View>
        <View style={styles.separator} />
      </View>
  );
}
 noData(data) {
  return (
      <View>
        <View style={styles.row}>
          <Text style={styles.todoText}>{data}</Text>
        </View>
        <View style={styles.separator} />
      </View>
  );
}
renderInfo(){
  if(this.items.length==0){
         return this.noData("No Data")
        }else{
       return <ListView
        dataSource={this.state.todoSource}
        renderRow={this.renderRow.bind(this)} />
      }
}

  render() {
    return (

      <Container style={styles.container}>
      <Header style={{backgroundColor:'#affcab'}}>
      	<Button transparent onPress={()=>this.props.navigator.push({index:0})}>
          <Text>back</Text>
       </Button>

       <Button transparent>
          <Text></Text>
        </Button>
      </Header>
      <View style={styles.container}>
       <View>
        {this.renderInfo()}
        </View>
      </View>

      <Footer style={{backgroundColor:'#affcab'}}>
         <Text style={{alignItems:'center'}}>Total : Rs.{this.state.total}</Text>
      </Footer>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
      row: {
    flexDirection: 'row',
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  }
});

AppRegistry.registerComponent('Calculate', () => Calculate);
