import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <>
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image source = {{uri : 'https://i.scdn.co/image/ab6775700000ee85d92f49fdbeb71c471674ec78'}} style = {styles.userImage} />
                <Text style = {styles.headerText}>Your Library</Text>
            </View>
            <View style = {styles.iconContainer}>
                <TouchableOpacity>
                    <Image source = {{uri : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/search.png'}} style = {styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {{uri : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/plus-math.png'}} style = {styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'space-between',
        marginHorizontal : 20,
        marginTop : 30,
        marginBottom : 30
    },

    iconContainer : {
        flexDirection : 'row',
        alignItems : 'space-between',
        justifyContent : 'space-between',
    },

    header : {
        flexDirection : 'row',
    },
    
    headerText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 23,
        marginLeft : 15
    },

    icon : {
        height : 30,
        width : 30,
        marginLeft : 20
    },

    userImage : {
        height : 30,
        width : 30,
        borderRadius : 50
    },
})
export default Header