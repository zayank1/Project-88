import React, { Component } from 'react';
import { Text, View,SafeAreaView,StyleSheet,Platform,StatusBar,TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = {{flex:1}}>
                <SafeAreaView style = {{ marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0}}> </SafeAreaView>
                <View style = {{flex:0.5,
        justifyContent:"center",
        alignItems:"center"}}>

                <Text style = {{fontSize:40,
        fontWeight:"bold",
        color:"white"}}>Stellar</Text>
                <Text style = {{fontSize:40,
        fontWeight:"bold",
        color:"white"}}>App</Text>
            </View>
            <TouchableOpacity style = {{flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"white"}}>
             <Text style = {{fontSize:25,
        fontWeight:"bold",
        color:"#D11583",
        justifyContent:"center",
        alignItems:"center"}}>Daliy Pictures</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"white"}}>
             <Text style = {{fontSize:25,
        fontWeight:"bold",
        color:"#D11583",
        justifyContent:"center",
        alignItems:"center"}}>Star Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex:0.12,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"white"}}>
             <Text style = {{fontSize:25,
        fontWeight:"bold",
        color:"#D11583",
        justifyContent:"center",
        alignItems:"center"}}>Star Craft</Text>
            </TouchableOpacity>

            </View>
           
        )
    }
}

