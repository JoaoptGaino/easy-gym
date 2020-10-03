import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:12,
        marginBottom:12
    },

    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 80,
        width: 'auto',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    name: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Roboto_700Bold',
        paddingRight:12,
    },
    selected: {
        borderColor: '#ff0000',
        borderWidth: 2,
        height: 200,
    },
    exerciseContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    howtoContainer:{
        textAlign:'center',
        backgroundColor:'#fefefe'
    },
    reps:{
        fontWeight:'bold',
        fontSize:14
    }
});

export default styles;