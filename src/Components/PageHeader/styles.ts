import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#9D090E'
    },
    topBar:{
        paddingTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontFamily:'Roboto_700Bold',
        color:'#fff',
        fontSize:24,
        lineHeight:32,
        maxWidth:160,
        marginVertical:40,
        textAlign:'center',
    }
})

export default styles;