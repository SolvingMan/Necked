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
    Alert
} from 'react-native';

export default class Forgotpass extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_email: '',
            alertVisible: false,
            alertContent: '',
        }
        
        this.sendpassword = this.sendpassword.bind(this);
    }

    sendpassword() {
        if (this.state.user_email == '') {
            Alert.alert("Please insert your email");
            return;
        }
        fetch("http://18.209.93.188/api/forgot_password?email="+this.state.user_email, {
            method: "POST",
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.action === "true") Alert.alert("send correct"); 
          if (responseJson.action === "false")  Alert.alert(responseJson.result); 
        console.log(responseJson.action)
        }).catch((error) => {
            Alert.alert("Please wait. \n Server is repairing")
            // console.error(error);
            return;
          }); 
}
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} 
                placeholder='E-mail address or login'
                autoCapitalize='none'
                onChangeText={(user_email) => this.setState({user_email})}
                />
                <TouchableOpacity
                        style={styles.submit1}
                        // onPress={() => this.submitSuggestion(this.props)}
                        onPress={this.sendpassword}
                       >
                            <Text style={styles.submitText1}
                            >Send new password</Text>
                    </TouchableOpacity>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'white'
    },
    input: {
        marginTop: '16%',
        width:'80%',
        height: '5%',
        // padding: '2%',
        paddingLeft: '5%',
        borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: '#a0a0a0',
        borderWidth:1,
        padding : 10
    },
    submit1:{
        width:'80%',
        height: '7%',
       
        marginTop:'5%',
        // paddingTop:20,
        padding:0,
        // padding:1,
        // backgroundColor:'#317ae0',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#317ae0',
        // fontColor: '#317ae0'
        // alignItems:'center',
        // justifyContent:'center',
      },
      submitText1:{
          color:'#317ae0',
          textAlign:'center',
          marginTop:'3.5%',
          fontSize: 18,
        //   fontWeight: 'bold',
         
      },

})