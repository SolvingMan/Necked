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
import  AboutScreen  from './AboutScreen';

export default class FeedScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Feed!</Text>
        </View>
      );
    }
  }
 