import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
    return <View>
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>Content</Text>
        <TextInput style={styles.input}/>
    </View>
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        marginHorizontal: 10

    },
    text: {
        fontSize: 22,
        marginBottom: 10,
        marginHorizontal: 10
    }
});

export default CreateScreen;