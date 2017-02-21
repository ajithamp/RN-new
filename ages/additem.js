
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
  TouchableHighlight
} from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import { Container,Header,Icon,Button,Footer} from 'native-base';
import realm from './realm.js';

export default class Add extends Component {
	constructor(props,context){
		super(props,context);
		this.state={
			item:'',
			price:'',
			val:'0.25'
		}
	}
	success(){
		if(this.state.item != '' && this.state.price!=''){
			if(isNaN(this.state.price)){
						alert("Enter Valid price")
	}
	else{
		let mulvalue = this.state.price*this.state.val;
    let _id = Math.random();
     realm.write(() => {
     realm.create('Item', {id:_id,item: this.state.item,price:mulvalue});
     this.props.navigator.replace({index:0});
   });
	}
}
	else{
		alert("Enter All Fields");
	}
	}
  render() {
    return (

      <Container style={styles.container}>
      <Header style={{backgroundColor:'#affcab'}}>
      	<Button transparent onPress={()=>this.props.navigator.push({index:0})}>
                      <Text>Back</Text>
                    </Button>

                    <Button transparent>
                      <Text></Text>
                    </Button>
      </Header>
        <View style={{flex:1,marginTop:30,justifyContent:'flex-start'}}>
        <View style={{alignItems:'flex-start'}}>
         <Isao
          label={'Item Name'}
          activeColor={'#3878e0'}
          passiveColor={'#0cf7e3'}
          style={styles.input}
          value={this.state.item}
          onChangeText={(inp)=>this.setState({item:inp})}
        />
        </View>
        <View style={{alignItems:'flex-start'}}>
        <Isao
          label={' Price'}
          activeColor={'#3878e0'}
          passiveColor={'#0cf7e3'}
          style={styles.input}
          value={this.state.price}
          onChangeText={(inp)=>this.setState({price:inp})}
          keyboardType="numeric"
        />
        </View>
  <Picker selectedValue={this.state.val} 
  onValueChange={(value) => this.setState({val: value})}
  style={styles.picer}> 
  <Picker.Item label="1/4 kg" value='0.25' /> 
    <Picker.Item label="1/2 kg" value='0.5' /> 
  <Picker.Item label="3/4 kg" value='0.75' /> 
    <Picker.Item label="1 kg" value='1' /> 
  </Picker>
</View>
<Footer style={{backgroundColor:'#affcab'}}>
<Text onPress={this.success.bind(this)}>Save</Text>
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
  	height:15
  },
  button:{
  	borderRadius:5,
  	width:50,
  	height:25,
  	backgroundColor:'#f23a58',
  	marginLeft:140,
  },
  button_txt:
  {
  	  	textAlign:'center',
  	  	color:"#FFFFFF"
  },
  picer:{
  	width:80,
  	marginTop:20,
  	marginLeft:120
  }
});

AppRegistry.registerComponent('Add', () => Add);
