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
    Image,
    StatusBar,
    Header,
    Alert
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import Profileboard from './Profileboard';
import {  Navigator } from 'react-navigation'
import Photo from './Photo';
import Photocover from './Photocover';
import { user_id } from '../../App';
import { setUserID } from '../../App';
import { getUserID } from '../../App';

export let photo_data;
export let photo_cover; 
export function setphoto(photodata) {
    photo_data = photodata;
}
export function getphoto() {
  return photo_data;
}
export function setphotocover(photodata) {
    photo_cover = photodata;
}
export function getphotocover() {
  return photo_cover;
}


const Editboard= createMaterialTopTabNavigator ({
    Photo: { screen: Photo },
    Photocover: { screen: Photocover }
  });

export default class Editprofile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_name: '',
            user_Bio: '',
            user_email:'',
            alertVisible: false,
            alertContent: '',
        }
        
        this.onPressSave = this.onPressSave.bind(this);
    }

    componentWillMount() {
        // Alert.alert(user_id);
    //    fetch("http://192.168.0.140/api/get_userinfo?user_id="+user_id, {
    //     // fetch("http://192.168.0.140/api/get_userinfo?user_id=5b73eebc79c833198c005993", {
    //         method: "POST",
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       console.log(responseJson);
    //       if (responseJson.action === "true")  {this.state.user_name= responseJson.result.username; this.state.user_email=responseJson.result.email;}
    //       if (responseJson.action === "false")  Alert.alert("faild"); 
    //     console.log(responseJson.action)
    //     }).catch((error) => {
    //         console.error(error);
    //         return;
    //       }); 
    }
    
    componentDidMount() {
    }
    
    componentWillUnmount() {
        
    }
    onPressSave() {
        
        // fetch("http://18.209.93.188/api/profile_edit?user_id=5b73eebc79c833198c005993&first_name="+user_name+"&last_name=&email=&bio=&profile_pic_url=&cover_pic_url", {
        //     method: "POST",
        // })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //   console.log(responseJson);
        //   if (responseJson.action === "true") console.log("save changes")
        //   if (responseJson.action === "false")  Alert.alert("save changes faild"); 
        // console.log(responseJson.action)
        // }).catch((error) => {
        //     // console.error(error);
        //     Alert.alert("Please wait. \n Server is repairing")
        //     return;
        //   }); 


    }

    render() {
        return (
            <View style={{ width:'100%', height:'100%'}}>
          <Editboard />
          <View style={styles.editview}>
                <TextInput style={styles.textinput}
                placeholder="username"
                autoCapitalize='none'
                onChangeText={(user_name) => this.setState({user_name})}
                value={this.state.user_name}
                ></TextInput>
                <TextInput style={styles.textinput} autoCapitalize='none' placeholder="Bio"
                     onChangeText={(user_Bio) => this.setState({user_Bio})} 
                >
                </TextInput>
                <TextInput style={styles.textinput} autoCapitalize='none' 
                    placeholder="email"
                    onChangeText={(user_email) => this.setState({user_email})} 
                    value={this.state.user_email}
                >
                </TextInput>
                <TouchableOpacity
                        style={styles.submit1}
                        onPress={this.onPressSave}
                       >
                            <Text style={styles.submitText1}
                            
                            >Save Changes</Text>
                    </TouchableOpacity>
          </View>
      </View>
        );
      }
}

const styles=StyleSheet.create({
    editboard:{
        width:'100%',
        height:'35%'
    },
    editview:{
        width:'100%', 
        height:'60%', 
        backgroundColor:'white', 
        borderTopColor:'#919191', 
        borderTopWidth:1,
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    textinput:{
        width:'80%',
        height:'10%',
        marginTop:'5%',
        // backgroundColor:'red',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#919191',
        paddingLeft:'5%'
    },
    submitText1:{
        color:'white',
        textAlign:'center',
        marginTop:'3.5%',
        fontSize: 18,
      //   fontWeight: 'bold',
       
    },
    submit1:{
        width:'80%',
        height: '14%',
        marginTop:'5%',
        padding:0,
        backgroundColor:'#317ae0',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#317ae0',
        // justifyContent:'center',
        alignItems:'center'
       
      },
})