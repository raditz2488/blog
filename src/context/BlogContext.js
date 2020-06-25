import createDataContext from './createDataContext';

// Will change
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogPost":
            return [...state, { title: `Blog Post #${state.length + 1}`, id: Math.floor(Math.random() * 99999) }];

        case "delete_blogPost":
            return state.filter( blogPost => blogPost.id === action.payload)

        default:
            return state;
    }
}

// Will change
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: "add_blogPost" });
    };
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost }, 
    []
);