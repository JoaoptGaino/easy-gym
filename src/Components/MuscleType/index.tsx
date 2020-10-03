import React, { useState } from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface MuscleTypeProps {
    name: string;
    goto: string;
}
const MuscleType: React.FC<MuscleTypeProps> = ({name, goto }) => {
    const { navigate } = useNavigation();
    function handleGoto() {
        navigate(goto);
    }
    return (
        <View>
            <TouchableOpacity
                key={name}
                style={styles.item}
                onPress={() => handleGoto()}
                activeOpacity={0.6}
            >
                <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
        </View>



    );
}

export default MuscleType;