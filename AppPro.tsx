import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
           <Text style={isDarkMode ? styles.redText : styles.yellowText}>
            Hellooooo
            </Text>
        </View>       
    )
}             

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    redText: {
        color: '#880808'
    },
    yellowText: {
        color: '#FFC300'
    },
})

export default AppPro;