import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';


interface PageHeaderProps {
    title: string;
    goto:string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title,goto }) => {
    const { navigate } = useNavigation();
    function handleGoBack() {
        navigate(goto);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Icon name="arrow-left" color="#FFF" size={24} />
                </BorderlessButton>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </View>
    );
}

export default PageHeader;