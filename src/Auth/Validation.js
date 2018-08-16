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


export default class Validation extends Component {
	constructor(props){
		super(props);
		this.state = {
				v1: '',
				v2: '',
				v3: '',
				v4: '',
				v5: '',
				v6: '',
				alertVisible: false,
				alertContent: '',
		}
		
		this.verifyemail = this.verifyemail.bind(this);
}
	verifyemail() {
		// console.log(this.state.v1+this.state.v2+this.state.v3+this.state.v4+this.state.v5+this.state.v6);
			if (this.state.v1 == '' || this.state.v2 == '' || this.state.v3 == '' || this.state.v4 == '' || this.state.v5 == '' || this.state.v6 == '') {
					Alert.alert("Invalid");
					return;
				}

			fetch("http://192.168.0.140/api/register_confirm?confirm_str=?"+this.state.v1+this.state.v2+this.state.v3+this.state.v4+this.state.v5+this.state.v6, {
					method: "GET",
			})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				if (responseJson.action === "true")	this.props.navigation.navigate('AppboardScreen');  
				if (responseJson.action === "false")  Alert.alert("Invaild verify");  
			console.log(responseJson.action)
			}).catch((error) => {
				Alert.alert("Please wait. \n Server is repairing")
					// console.error(error);
					return;
				}); 
			// this.props.navigation.navigate('AppboardScreen');
	}
		render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input1} 
										 autoCapitalize='none'
										 maxLength = {1}
										 onChangeText={(v1) => this.setState({v1})} 
										/>
                    <TextInput style={styles.input1} 
										 autoCapitalize='none'
										 maxLength = {1}
										 onChangeText={(v2) => this.setState({v2})}
										/>
										<TextInput style={styles.input1} 
										 autoCapitalize='none'
										 maxLength = {1}
										 onChangeText={(v3) => this.setState({v3})}
										/>
										<TextInput style={styles.input1} 
										 autoCapitalize='none'
										 maxLength = {1}
										 onChangeText={(v4) => this.setState({v4})}
										/>
										<TextInput style={styles.input1} 
										 autoCapitalize='none'
										 maxLength = {1}
										 onChangeText={(v5) => this.setState({v5})}
										/>
										<TextInput style={styles.input1} 
										 autoCapitalize='none'
										 maxLength = {1}
										 onChangeText={(v6) => this.setState({v6})}
										/>
                </View>
                <TouchableOpacity
                    style={styles.submit1}
                    onPress={ this.verifyemail}
                >
                    <Text style={styles.submitText1}>Verify your Email</Text>
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
        justifyContent:'center',
				backgroundColor:'white',
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
          marginTop:'3%',
          fontSize: 16,
        //   fontWeight: 'bold',
         
      },
      input1: {
          width:40,
          height:40,
          borderWidth:1,
          borderColor:'#317ae0',
					marginRight:5,
					textAlign: 'center',
			},
})