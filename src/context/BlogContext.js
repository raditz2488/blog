import createDataContext from './createDataContext';

// Will change
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogPost":
            return [...state, { title: action.payload.title, content: action.payload.content, id: Math.floor(Math.random() * 99999) }];

        case "delete_blogPost":
            return state.filter( blogPost => blogPost.id !== action.payload)

        default:
            return state;
    }
}

// Will change
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

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    [{title: "Test", content: "Content", id: 1}]
);