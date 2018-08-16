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
import  PostsScreen  from './PostsScreen';
import  LikeScreen  from './LikeScreen';
import  FeedScreen  from './FeedScreen';

export default class Profileinfo extends Component {
    render() {
        return (
            <Homeboard />

        );
      }
}

  
  const Homeboard= createMaterialTopTabNavigator ({
    Posts: { screen: PostsScreen },
    Like: { screen: LikeScreen },
    Feed: { screen: FeedScreen },
    About: { screen: AboutScreen },
  });