import React from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface MuscleTypeProps{
    name:string;
    goto:string;
}
const MuscleType:React.FC<MuscleTypeProps> =({name,goto})=> {
    const {navigate} = useNavigation();
    function handleGoto(){
        navigate(goto);
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                
                <RectButton style={styles.button} onPress={handleGoto}>
                    <Text style={styles.buttonText}>{name}</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default MuscleType;