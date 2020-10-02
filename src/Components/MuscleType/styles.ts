import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#550000',
        borderWidth:1,
        borderColor:'#550000',
        borderRadius:8,
        marginBottom:16,
        overflow:'hidden',
    },
    name:{
        fontFamily:'Roboto_700Bold',
        color:'#32264d',
        fontSize:20,
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:16,
        marginBottom:16,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#550000',
        width:300,
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginRight:8,
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontFamily:'Roboto_700Bold',
        fontSize:16,
        marginLeft:16,
    }
});

export default styles;