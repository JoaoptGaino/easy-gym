import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    Muscle: MuscleExercise;
}
const Exercise: React.FC<Props> = ({ Muscle }) => {
    return (
        <View key={Muscle.name}>
            <Text>{Muscle.name}</Text>
            <Text>{Muscle.howto}</Text>
            <Text>{Muscle.reps}</Text>
        </View>
    )
}

export default Exercise;