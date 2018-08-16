import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    TabNavigator,
    Image
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload'
import { StackNavigator } from 'react-navigation';
// import PhotoUpload from './PhotoUpload'
import Profileinfo from './Profileinfo';
import FontAwesome from 'react-native-fontawesome';
import Editprofile from './Editprofile';


export default class Profileboard extends Component {
    render() {
        return (
           <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
            <View style={{backgroundColor:'white', width:'100%', height:'30%'}}>
               {/*User Photo */}
                <PhotoUpload
                onPhotoSelect={avatar => {
                    if (avatar) {
                    console.log('Image base64 string: ', avatar);
                    }
                }}
                >
                <Image
                    style={{
                    paddingVertical: 30,
                    width: 150,
                    height: 150,
                    borderRadius: 75
                    }}
                    resizeMode='cover'
                    source={{
                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                    }}
                />
                </PhotoUpload>
            
               {/* Edit Profile touch */}
                    <TouchableOpacity
                    style={{width:35, height:35, right:'5%', top:'5%', position:'absolute'}}
                   onPress={() => this.props.navigation.navigate('EditprofileScreen')}
                    >
                        <View style={{backgroundColor:'white', width:'100%', height:'100%', borderRadius:50, alignItems:'center',justifyContent:'center' }}>
                        <Image source={require('../image/Pencil_font_awesome.svg.png')}
                        style={{width:'60%', height:'60%'}}
                        >
                        </Image>
                        </View>
                    </TouchableOpacity>
                </View>

            {/* Profile View Navigation Such as POSTS, LIKE, FEED, ABOUT  */}
                <Profileinfo />
            </View>
        );
      }
}