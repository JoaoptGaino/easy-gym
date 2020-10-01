import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000',
        justifyContent:'center',
        padding:18
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 52,
        fontFamily: 'Roboto_700Bold'
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Roboto_700Bold'
    },
    main: {
        paddingTop: 96
    },
    button: {
        backgroundColor: '#191622',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: '#0E0C14',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf:'center',
        paddingRight:25,
        color: '#FFF',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
    }
});
export default styles;