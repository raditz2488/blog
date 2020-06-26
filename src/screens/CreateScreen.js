import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context);

    return <BlogPostForm></BlogPostForm>
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