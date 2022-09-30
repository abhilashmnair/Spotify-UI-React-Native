import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SEARCHCARDS } from '../../assets/data/searchCards'

const RecentPlays = () => (
    <View style = {{marginHorizontal : 10, marginTop : 10, marginBottom : 50}}>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[0]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[0]['title']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[1]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[1]['title']}</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[2]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[2]['title']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[3]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[3]['title']}</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[4]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[4]['title']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[5]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[5]['title']}</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[6]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[6]['title']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[7]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[7]['title']}</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[8]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[8]['title']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[9]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[9]['title']}</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.card}>
                <Image
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[10]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[10]['title']}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.thumb} 
                    source = {{uri : SEARCHCARDS[11]['image']}}/>
                <Text style = {styles.title}>{SEARCHCARDS[11]['title']}</Text>
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
        backgroundColor : '#CCCCFF',
        borderRadius : 5,
        width : 160,
        height : 90,
        flexDirection : 'row-reverse',
        justifyContent : 'space-between',
        alignItems : 'space-around',
        overflow : 'hidden',
    },
    
    thumb : {
        height : 65,
        width : 65,
        marginRight : -20,
        borderRadius : 10,
        transform : [{rotate : '30deg'}]
    },

    title : {
        color : 'black',
        marginLeft : 10,
        marginBottom : 50,
        fontWeight : 'bold',
        fontSize : 15,
    }
})

export default RecentPlays