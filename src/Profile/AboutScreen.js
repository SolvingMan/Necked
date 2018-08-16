
import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { createMaterialTopTabNavigator  } from 'react-navigation'; 
import {user_id} from '../../App';

export default class AboutScreen extends Component {
  componentWillMount() {
  }
  
  componentDidMount() {

  }
  
  componentWillUnmount() {
      // EventRegister.removeAllListeners();
  }
    render() {
      return (
        <View>
          <View style={{  borderBottomWidth:1, borderBottomColor:'grey'}}>
            <Text style={{marginLeft:'10%', marginTop:'7%',marginBottom:'7%', fontSize:18, color:'#3e98f2'}}>
                About Me
            </Text>
          </View>
          <View style={{  borderBottomWidth:1, borderBottomColor:'grey',flexDirection:'row'}}>
            <Text style={{marginLeft:'10%', marginTop:'4%',marginBottom:'4%', width:'30%',fontSize:15, color:'#9b9b9b'}}>
               Username
            </Text>
            <Text style={{marginRight:'10%', marginTop:'4%',marginBottom:'4%', fontSize:15, color:'#9b9b9b'}}>
               min@gmail.com
            </Text>
          </View>
          <View style={{  borderBottomWidth:1, borderBottomColor:'grey', flexDirection:'row'}}>
            <Text style={{marginLeft:'10%', marginTop:'4%',marginBottom:'4%',width:'30%', fontSize:15, color:'#9b9b9b'}}>
                Bio
            </Text>
            <Text style={{marginRight:'10%', marginTop:'4%',marginBottom:'4%', fontSize:15, color:'#9b9b9b'}}>
                Bio
            </Text>
          </View>
          <View style={{  borderBottomWidth:1, borderBottomColor:'grey', flexDirection:'row'}}>
          <Text style={{marginLeft:'10%', marginTop:'4%',marginBottom:'4%',width:'30%', fontSize:15, color:'#9b9b9b'}}>
                E-mail
            </Text>
            <Text style={{marginRight:'10%', marginTop:'4%',marginBottom:'4%', fontSize:15, color:'#9b9b9b'}}>
                username@gmail.com
            </Text>
          
          </View>
        </View>
      );
    }
  }