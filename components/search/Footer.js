import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const FooterIcons = [
    {
        icon : 'home',
        active : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/home.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/home.png'
    },
    {
        icon : 'search',
        active : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/search.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/search.png'
    },
    {
        icon : 'library',
        active : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/menu.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/menu.png'
    }
]

const Footer = ({navigation}) => {
    const [activeTab, setActiveTab] = useState(0)
    
    const Icon = ({icon, iconStyle}) => (
        <TouchableOpacity onPress ={() => {
                setActiveTab(icon.icon);
                icon.icon == 'search' ? navigation.push('SearchScreen') : icon.icon == 'library' ? navigation.push('LibraryScreen') : navigation.push('HomeScreen')}} 
                style = {{alignItems : 'center'}}>
            <Image source = {{uri : activeTab == icon.icon ? icon.active : icon.inactive}} style = {iconStyle} />
            <Text style = {styles.text}>{icon.icon}</Text>
        </TouchableOpacity>
    )

    return (
        <View style = {styles.container}>
        {FooterIcons.map((item, index) => (
            <Icon icon = {item} iconStyle = {styles.icon} key ={index} />
        ))}
        </View>
)}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "rgba(0,0,0,0.8)",
        position : 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        flexDirection : 'row',
        justifyContent : 'space-around',
        height : 50,
        alignItems : 'center',
    },

    icon : {
        width : 25,
        height : 25
    },

    text : {
        color : 'white',
        alignItems : 'flex-start',
        fontSize : 10
    }
})

export default Footer