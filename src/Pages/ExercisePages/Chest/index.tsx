import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Exercise from '../../../Components/Exercise';
import PageHeader from '../../../Components/PageHeader';
import api from '../../../Services/api';
import styles from './styles';



function Chest() {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        api.get('exercises')
            .then(response => {
                setExercises(response.data.Chest);
            });
    }, [])
    if(!exercises){
        return <AppLoading/>
    }
    return (
        <>
            <PageHeader title="Chest" goto="Exercises" />
           
            <ScrollView style={styles.container}>
                {exercises.map((exer, i) => (
                    <Exercise key={i} Muscle={exer} />
                ))}
            </ScrollView>
        </>
    );
}

export default Chest;