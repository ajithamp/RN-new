
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
  Alert,
  ListView,
  TouchableHighlight
} from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import { Container,Header,Footer,Button,Icon} from 'native-base';
import realm from './realm.js';

export default class List extends Component {
	constructor(props){
		super(props);
    this.state={
          data:'',
          todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
    this.items = [];
	}
  componentDidMount(){
     this.items = realm.objects('Item');
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
 }
 removeTodo(rowData) {
  realm.write(() => {
    let item = realm.objects('Item').filtered("id="+rowData.id);
    realm.delete(item);
  });
   this.items = realm.objects('Item');
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
}
 renderRow(rowData) {
  return (
      <View>
        <View style={styles.row}>
          <Text style={styles.todoText}>{rowData.item}</Text>
          <Text style={styles.todoText}>{rowData.price}</Text>
         <TouchableHighlight style={styles.button} onPress={() => this.removeTodo(rowData)}>
         <Text style={styles.button_txt}>Remove</Text>
        </TouchableHighlight>
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
        <Button transparent>
        <Text></Text>
        </Button>

                    <Button transparent onPress={()=>{data=[];this.props.navigator.push({index:1})}}>
                      <Text>Add Item</Text>
                    </Button>
      </Header>
      <View style={styles.container}>
        <View>
        {this.renderInfo()}
        </View>
      <View style={{marginTop:20}}>
      </View>
      </View>
      <Footer style={{backgroundColor:'#affcab'}}>
      <Text style={{alignItems:'center'}} onPress={()=>this.props.navigator.push({index:2})}>Calculate</Text>
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
  input:{
  	marginLeft:35,
  	width:250,
  	height:30
  },
  button:{
  	width:70,
  	height:25,
  	backgroundColor:'#f23a58',
  	marginLeft:140,
  },
  button_txt:
  {
  	  	textAlign:'center',
  	  	color:"#FFFFFF"
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

AppRegistry.registerComponent('List', () => List);
