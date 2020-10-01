import React from 'react';
import { Button, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';


const Home = () => {
    function navigateToExercises() {
        alert("OI");
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Easy Gym</Text>
                    <Text style={styles.subtitle}>Your own personal trainer</Text>
                </View>
                <View style={styles.main}>
                    <RectButton style={styles.button} onPress={navigateToExercises}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>Workout</Text>
                    </RectButton>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Home;