import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
    Muscle: MuscleExercise;
}

const Exercise: React.FC<Props> = ({ Muscle }) => {
    const [selectedItem, SetSelectedItem] = useState<number[]>([]);
    function handleSelected(id: number) {
        const alreadySelected = selectedItem.findIndex(item => item === id);
        if (alreadySelected >= 0) {
            const filteredItems = selectedItem.filter(item => item !== id);
            SetSelectedItem(filteredItems);
        } else {
            SetSelectedItem([...selectedItem, id]);
        }
    }
    return (
        <View key={Muscle.id} style={styles.container}>
            <TouchableOpacity
                key={String(Muscle.name)}
                style={[
                    styles.item,
                    selectedItem.includes(Muscle.id) ? styles.selected : {}
                ]}
                onPress={() => handleSelected(Muscle.id)}
                activeOpacity={0.6}
            >
                <View style={styles.exerciseContainer}>
                    <Text style={styles.name}>{Muscle.name}</Text>
                    <Text style={styles.reps}>Reps:{Muscle.reps}</Text>
                </View>
                <ScrollView style={styles.howtoContainer}>
                    <Text style={[selectedItem.includes(Muscle.id) ? { display: 'flex' } : { display: 'none' }]}>{Muscle.howto}</Text>
                </ScrollView>
            </TouchableOpacity>

        </View>
    )
}

export default Exercise;