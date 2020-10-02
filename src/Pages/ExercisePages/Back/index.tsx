import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PageHeader from '../../../Components/PageHeader';
import api from '../../../Services/api';
import styles from '../../Home/styles';

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
            <View style={styles.container}>
                {exercises.map(exer => (
                    <View>
                        <Text>{exer.name}</Text>
                    </View>
                ))}
            </View>
        </>
    );
}

export default Back;