import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo list</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        height:80,
        paddingTop:40,
        backgroundColor:'#00d1b2'
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#fafafa'
    }
})







export default Header
