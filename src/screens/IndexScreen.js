import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return <View>
        <Button 
            title="Add blog"
            onPress={ addBlogPost }
        />
        <FlatList
            data={state}
            keyExtractor={ (blog) => blog.title }
            renderItem={ ({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={ () => deleteBlogPost(item.id) }>
                        <Feather name='trash' style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            } }
        />
    </View>
}

const styles = StyleSheet.create({
    row: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 22
    }
});

export default IndexScreen;