import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Exercise from '../../../Components/Exercise';
import PageHeader from '../../../Components/PageHeader';
import api from '../../../Services/api';
import styles from './styles';



function Back() {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        api.get('exercises')
            .then(response => {
                setExercises(response.data.Back);
            });
    }, [])
    return (
        <>
            <PageHeader title="Back" goto="Exercises" />
            <ScrollView style={styles.container}>
                {exercises.map((exer, i) => (
                    <Exercise key={i} Muscle={exer} />
                ))}
            </ScrollView>
        </>
    );
}

export default Back;