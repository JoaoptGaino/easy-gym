import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    name:{
        fontFamily:'Roboto_700Bold',
        color:'#32264d',
        fontSize:20,
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },

    selected: {
        borderColor: '#34CB79',
        borderWidth: 2,
        height: 120,
    },
});

export default styles;