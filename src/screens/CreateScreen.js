import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CreateScreen = () => {
    return <View>
        <Text>Title</Text>
        <TextInput/>
        <Text>Content</Text>
        <TextInput/>
    </View>
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        fontSize: 22,
    }
});

export default CreateScreen;