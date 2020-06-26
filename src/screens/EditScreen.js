import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm initialValues={ { title: blogPost.title, content: blogPost.content } }></BlogPostForm>
}

const styles = StyleSheet.create({});

export default EditScreen;