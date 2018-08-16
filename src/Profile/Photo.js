import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
// import  AboutScreen  from './AboutScreen';
// import PhotoUpload from 'react-native-photo-upload'
import ImagePicker from 'react-native-image-picker'
import  photo_data from './Editprofile';
// import  photo_cover from './Editprofile';
import  {setphoto} from './Editprofile';
import  {getphoto} from './Editprofile';
// import  getphotocover from './Editprofile';
import  setphotocover from './Editprofile';
import { user_id } from '../../App';

const options = {
    titile: "select a photo",
    takePhotoButtonTitle: 'Take a photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    quality: 1
};

export default class Photo extends Component {
    constructor() {
        super();
        this.state = {
            imageSource: null
        }
    }
    componentWillMount() {
        // fetch("http://18.209.93.188/api/get_userinfo?user_id="+user_id, {
        // fetch("http://18.209.93.188/api/get_userinfo?user_id=5b73eebc79c833198c005993", {
        //     method: "POST",
        // })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //   console.log(responseJson);
        //   if (responseJson.action === "true")  Alert.alert(responseJson.result);
        //   if (responseJson.action === "false")  Alert.alert("faild"); 
        // console.log(responseJson.action)
        // }).catch((error) => {
        //     // console.error(error);
        //     Alert.alert("Please wait. \n Server is repairing")
        //     return;
        //   }); 
     }
     
     componentDidMount() {
     }
     
     componentWillUnmount() {
         
     }
    selectPhoto() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    imageSource: source
                });
                // Alert.alert(response);
                setphoto(response.data);
                // Alert.alert(getphoto);
                if (this.state.imageSource) {
                    // Create the form data object
                    var data = new FormData();
                    data.append('upload_file', {
                      uri: response.uri,
                      name: 'selfie.jpg',
                      type: 'image/jpg'
                    });
                    data.append('type', 'image');
                    data.append('user_id', '5b73eebc79c833198c005993');
                    // Create the config object for the POST
                    // You typically have an OAuth2 token that you use for authentication
                    const config = {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data;',
                        Authorization: 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH'
                      },
                      body: data
                    };
                
                    // fetch("http://18.209.93.188/api/upload_media", config)
                    //   .then(responseData => {
                    //     // Log the response form the server
                    //     // Here we get what we sent to Postman back
                    //     console.log(responseData);
                    //     Alert.alert(responseData.result);
                    //   })
                    //   .catch(err => {
                    //     console.log(err);
                    //   });
                  }
                // fetch("http://192.168.0.140/api/upload_media?user_id=5b73eebc79c833198c005993&type=imgae&upload_file="+response.data, {
                //     method: "POST",
                // })
                // .then((response) => response.json())x
                // .then((responseJson) => {
                //   console.log(responseJson);
                //   if (responseJson.action === "true") Alert.alert("save changes")
                //   if (responseJson.action === "false")  Alert.alert("save changes faild"); 
                // console.log(responseJson.action)
                // }).catch((error) => {
                //     console.error(error);
                //     return;
                //   }); 
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

                <Image
                    style={{
                        paddingVertical: 30,
                        width: 150,
                        height: 150,
                        borderRadius: 75
                    }}
                    resizeMode='cover'
                    source={
                        this.state.imageSource != null ? this.state.imageSource : { uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg' }}
                />
                <TouchableOpacity
                    style={styles.submit1}
                    onPress={this.selectPhoto.bind(this)}
                >
                <Text style={styles.submitText1}>Change the Photo</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
    changePhoto: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
    },
    submitText1: {
        color: 'white',
        textAlign: 'center',
        marginTop:'2%',
        fontSize: 14,
        //   fontWeight: 'bold',

    },
    submit1: {
        width: '40%',
        height: '14%',
        marginTop:'-5%',
        padding: 0,
        backgroundColor: '#317ae0',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#317ae0',
        justifyContent:'center',
        alignItems: 'center'

    },
});
