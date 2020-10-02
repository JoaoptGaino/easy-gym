import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor:'#9D090E'
    },
    topBar:{
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