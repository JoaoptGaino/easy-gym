import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MuscleType from '../../Components/MuscleType';
import PageHeader from '../../Components/PageHeader';
import api from '../../Services/api';
import styles from './styles';


const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        api.get('exercises')
            .then(response => {
                setExercises(response.data.Back);
                console.log(exercises);
            })
    }, []);
    async function pressed() {
        const exer = await exercises;
        console.log(exer);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Your muscles" goto="Home" />
            <ScrollView style={styles.muscleList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <View style={styles.itemsContainer}>
                    <MuscleType name="Back" goto="Back" />
                    <MuscleType name="Back" goto="Back" />
                    <MuscleType name="Back" goto="Back" />
                </View>
                <View style={styles.itemsContainer}>
                    <MuscleType name="Back" goto="Back" />
                    <MuscleType name="Back" goto="Back" />
                    <MuscleType name="Back" goto="Back" />
                </View>
            </ScrollView>
        </View>
    );
}

export default Exercises;