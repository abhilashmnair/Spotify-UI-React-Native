import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CARDS } from '../../assets/data/recentCards'

const RecentPlays = () => (
    <View style = {{margin : 10}}>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : CARDS[0]['image']}}/>
                <Text style = {styles.title}>{
                    CARDS[0]['title'].length > 10 ? CARDS[0]['title'].slice(0,10) + '...' : CARDS[0]['title']
                }</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : CARDS[1]['image']}}/>
                <Text style = {styles.title}>{
                    CARDS[1]['title'].length > 10 ? CARDS[1]['title'].slice(0,10) + '...' : CARDS[1]['title']
                }</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : CARDS[2]['image']}}/>
                <Text style = {styles.title}>{
                    CARDS[2]['title'].length > 10 ? CARDS[2]['title'].slice(0,10) + '...' : CARDS[2]['title']
                }</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : CARDS[3]['image']}}/>
                <Text style = {styles.title}>{
                    CARDS[3]['title'].length > 10 ? CARDS[3]['title'].slice(0,10) + '...' : CARDS[3]['title']
                }</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : CARDS[4]['image']}}/>
                <Text style = {styles.title}>{
                    CARDS[4]['title'].length > 10 ? CARDS[4]['title'].slice(0,10) + '...' : CARDS[4]['title']
                }</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : CARDS[5]['image']}}/>
                <Text style = {styles.title}>{
                    CARDS[5]['title'] > 12 ? CARDS[5]['title'].slice(0,10) + '...' : CARDS[5]['title']
                }</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container : {
        justifyContent : 'space-around',
        flexDirection : 'row',
        marginBottom : 10,
        alignItems : 'center'
    },
    
    card : {
        backgroundColor : '#282828',
        borderRadius : 5,
        width : 155,
        height : 55,
        flexDirection : 'row',
        alignItems : 'center',
        overflow : 'hidden',
    },
    
    thumb : {
        height : 50,
        width : 50,
    },

    title : {
        color : 'white',
        margin : 10,
        fontWeight : 'bold',
        fontSize : 13,
    }
})

export default RecentPlays