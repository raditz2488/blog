import React, { useState, useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogPost":
            return [...state, { title: `Blog Post #${state.length + 1}` }];

        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {

     const [blogPosts, setBlogPosts] = useState([]);
     const [state, dispatch] = useReducer(blogReducer, []);

     const addBlogPost = () => {
         setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
         dispatch({ type: 'add_blogPost' })
     }

    return <BlogContext.Provider value={{data: state, addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;