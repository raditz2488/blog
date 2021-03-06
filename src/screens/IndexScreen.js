import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return <View>
        <FlatList
            data={state}
            keyExtractor={ (blog) => blog.title }
            renderItem={ ({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={ () => deleteBlogPost(item.id) }>
                            <Feather name='trash' style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            } }
        />
    </View>
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return <TouchableOpacity onPress={ () => navigation.navigate('Create') }>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        }
    }
};

const styles = StyleSheet.create({
    row: {
        paddingVertical: 20,
        paddingHorizontal: 20,
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