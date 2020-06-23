import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext, { BlogProvider } from '../context/BlogContext';

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext)

    return <View>
        <Text>Index Screen</Text>
        <FlatList
            data={data}
            keyExtractor={ (blog) => blog.title }
            renderItem={ ({ item }) => {
                return <Text>{item.title}</Text>
            } }
        />
    </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;