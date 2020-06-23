import createDataContext from './createDataContext';

// Will change
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogPost":
            return [...state, { title: `Blog Post #${state.length + 1}` }];

        default:
            return state;
    }
}

// Will change
const addBlogPost = () => {
    dispatch({ type: 'add_blogPost' })
}

export const { Context, Provider} = createDataContext(blogReducer, {addBlogPost}, []);