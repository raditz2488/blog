import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const CreateScreen = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return <View>
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.text}>Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        <Button title={"Save"}/>
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