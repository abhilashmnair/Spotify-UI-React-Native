import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import WelcomeMsg from './WelcomeMsg'
import React from 'react'

const Header = () => (
    <View style = {styles.container}>
        <WelcomeMsg />
        <View style = {styles.iconsContainer}>
            <TouchableOpacity>
                <Image 
                    source = {{uri : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/appointment-reminders.png'}}
                    style = {styles.icons}/>
                <View style = {styles.unread}>
                    <Text style = {styles.unreadDot}>•</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source = {{uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/time-machine.png'}}
                    style = {styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    source = {{uri : 'https://img.icons8.com/windows/ffffff/60/settings--v1.png'}}
                    style = {styles.icons}/>
            </TouchableOpacity>
      </View>
    </View>
)

const styles = StyleSheet.create({
    container : {
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 20,
        marginLeft : 20,
        flexDirection : 'row'
    },
    iconsContainer : {
        flexDirection : 'row',
        marginRight : 20
    },
    icons : {
        width : 25,
        height : 30,
        marginLeft : 20,
        marginTop : 10,
        resizeMode : 'contain'
    },
    unread : {
        position : 'absolute',
        marginLeft : 20,
        zIndex : 100
    },
    unreadDot : {
        fontSize : 25,
        color : '#0064FF',
    }
})

export default Header