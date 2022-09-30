import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
        <View style = {styles.container}>
            <Text style = {styles.header}>Search</Text>
        </View>
        <TouchableOpacity>
            <View style = {styles.searchContainer}>
                <Image source = {{ uri : 'https://img.icons8.com/fluency-systems-regular/000000/60/search.png'}} style = {styles.icon} />
                <Text style = {styles.placeholder}>Artists, songs, or podcasts</Text>
            </View>
        </TouchableOpacity>
        <View style = {{alignItems : 'center', justifyContent : 'space-between', marginTop : 10}}>
            <Text style = {{
                color : 'white',
                fontWeight : 'bold',
                fontSize : 18,
            }}>Browse all</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginHorizontal : 20,
        marginTop : 50
    },

    searchContainer : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        margin : 20,
        backgroundColor : 'white',
        height : 50,
        borderRadius : 5
    },

    header : {
        color : 'white',
        fontSize : 30,
        fontWeight : 'bold'
    },

    icon : {
        height : 30,
        width : 30,
        marginHorizontal : 10,
    },

    placeholder : {
        color : 'gray',
        fontSize : 16,
        fontWeight : 'bold'
    }
})

export default Header