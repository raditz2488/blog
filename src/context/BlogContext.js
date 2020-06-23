import React, { useReducer } from 'react';

// Wont change
const BlogContext = React.createContext();

// Will change
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogPost":
            return [...state, { title: `Blog Post #${state.length + 1}` }];

        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    // Wont change
     const [state, dispatch] = useReducer(blogReducer, []);

     // Will change
     const addBlogPost = () => {
         dispatch({ type: 'add_blogPost' })
     }

    // Wont change
    return <BlogContext.Provider value={{data: state, addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;