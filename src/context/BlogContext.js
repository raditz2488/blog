import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// Will change
const blogReducer = (state, action) => {
    switch (action.type) {
        case "get_blogPosts":
            return action.payload

        case "add_blogPost":
            return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 99999) }];

        case "delete_blogPost":
            return state.filter( blogPost => blogPost.id !== action.payload )

        case "edit_blogPost":
            return state.map((blogPost) => { 
                const payload = action.payload
                return blogPost.id === payload.id ? {id: payload.id, title: payload.title, content: payload.content } : blogPost
             });

        default:
            return state;
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const result = await jsonServer.get("/blogposts");
        dispatch({ type: "get_blogPosts", payload: result.data });
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogPost", payload: {title, content} });
        callback();
    };
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type:"edit_blogPost", payload: { id, title, content } })
        callback()
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, 
    []
);