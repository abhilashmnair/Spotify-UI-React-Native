import { Text, StyleSheet } from 'react-native'
import React from 'react'

const WelcomeMsg = () => {
    const today = new Date().toLocaleTimeString()
    let msg = ''
    if (today < '12:00:00') {msg = 'Good morning' 
    } else if (today < '16:00:00') { msg = 'Good afternoon'
    } else { msg = 'Good evening' }
    return (
        <Text style = {styles.headerText}>{msg}</Text>
  )
}

const styles = StyleSheet.create({
    headerText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 23
    }
})
export default WelcomeMsg