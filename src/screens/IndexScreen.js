import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)

    return <View>
        <Text>Index Screen</Text>
        <Button 
            title="Add blog"
            onPress={ addBlogPost }
        />
        <FlatList
            data={state}
            keyExtractor={ (blog) => blog.title }
            renderItem={ ({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Feather name='trash' size={22}/>
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
    }
});

export default IndexScreen;